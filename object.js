//Object Oriented with constructors
//Constructor function with prototypes
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);       //Uses data objetc/constructor

}
//Prototypes. Will not be listed in the whole object literal on the webbrowser.
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
*/


//Class
//Does everything above but in a prettier way/syntatical sugar
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);  
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiating Objects
const person1 = new Person("Christopher", "Doe", "3-14-1999");
const person2 = new Person("May", "Smith", "3-6-1980");
console.log(person1);
console.log(person1.getBirthYear()); //Can use data class to access information
console.log(person1.getFullName());


