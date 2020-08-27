//Conditional statements
const x = 8;

if(x==10){
    console.log(`x is ${x}`);
}
//=== checks for data type, x is a string so it doesn't log it. 
//Always use ===, want to match the types.
if(x === 10){
    console.log(`x is definitely 10`);
} 
else if(x>10){
    console.log('x is greaster than 10')
}
else{
    console.log('x is less than 10');
}
//Can do multiple condition with &&, ||, !

//Short hand notation for if statements. If true do left, else do right
const color = x > 10 ? "blue" : "pink";
console.log(color);

//Switches
switch(color){
    case 'blue':
        console.log("Color is blue");
        break;
    case "pink":
        console.log("Color is pink");
        break;
    default:
        console.log("color is neither blue or pink");
        break;
}

//Functions
function addNums(num1=0, num2=0){   //sets default values
    return num1+num2; 
}
console.log(addNums());
console.log(addNums(5,4));

//Arrow Function, has an advantage when using the this key word in certain situations.
const add = (num1=1, num2=1) => num1+num2; //don't need curly braces if one expression and will automatically return
console.log(add(5,4));

const add5 = num1 => num1+5; //Will not need parenthesis if only one parameter ir required.
console.log(add5(5));

