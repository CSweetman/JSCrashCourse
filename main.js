const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');                     //Adds error class to empty msg div to apply css
        msg.innerHTML = "Please enter all fields";      //Adds html/text to empty div

        setTimeout(() => msg.remove(), 3000);           //Time out: 1st parameter does action on time out, 2nd parameter is time in ms to time out
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
    console.log(nameInput.value);   //Gets value of the input
}