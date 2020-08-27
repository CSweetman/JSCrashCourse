//DOM - Document Object Model. Tree Structure of whole document. 4 Part DOM JS crash course.
console.log(window);    //Parent object of the browser, very top level. Lots of stuff including fetch api, and the document. 

//Document is used to select things
//Single elementselectors
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('.container')); //Works like jQuery, can sellet anything
console.log(document.querySelector('h1'));      //Single elem, even if there is more than 1 will select first one.

//Multiple element selectors
console.log(document.querySelectorAll('.item'));  //Gives a node list, similar to array (can run array methods on it). Always use querySelectiorAll
console.log(document.getElementsByClassName('item'));   //Gives HTML Collection, can't run array methods, manually convert it to array, no bueno.
console.log(document.getElementsByTagName('li'));   //Also gives HTML Collection

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));     //Loop through and grab list elements with for each loop and selector.

//Manipulating items in the DOM
const ul = document.querySelector('.items');
//ul.remove();    //removes the whole ul
//ul.lastElementChild.remove(); //removes the last element in the list
ul.firstElementChild.textContent = "Hello";   //edit the text content of the element
ul.children[1].innerText = "Brad";  //children is a node list
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';   //adds htmnl dynamically

const btn = document.querySelector('.btn');

btn.addEventListener('click',(e)=>{     //MDN documentation shows different events
    e.preventDefault(); //Stops default button setting to reload the page
    console.log("Click");   //Prints click to when ever the button is clicked
    console.log(e);         //Logs all the traits of the event (pos of mouse, etc.)
    console.log(e.target);  //Give the element that the event is on which is the button
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';   //Changes color after event executes
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = "<h1>Hello</h1>"
});
btn.style.background = 'red';       //Can be used in events/functions to make this dynamic
