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


