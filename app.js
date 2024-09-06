//Data Types

let a = 22;
let b = 19;

let name = "mommy";
let char = 'm';

//Arithmetic & Logical Statements

let sum = a+b;
console.log(sum);

let minus = a-b;
console.log(minus);

let multiply = a*b;
console.log(multiply);

let divide = a / b;
if (b != 0) {
    
} else{
    console.log("Error: Division by zero is not allowed.");
    return;
}
console.log(divide);

//Conditional Statements

let age = 18;
if (age >= 15) {
    console.log("joker");
} else {
    console.log("hayst");
}

let halaka = 'B';

switch (halaka) {
  case 'A':
    console.log('i');
    break;
  case 'B':
    console.log('dont');
    break;
  case 'C':
    console.log('know');
    break;
  case 'D':
    console.log('just');
    break;
  default:
    console.log('relax');
}

//LOOPS

for (let n = 0; n < 5; n++) {
    console.log("For Loop "+n);
}

let v = 0;
while (v < 5) {
    console.log("While Loop "+v);
    v++;
}

//Functional Programming

function showOddorEven(){
    if(a%2==0){
        let result = console.log("Odd");
    } else {
        let result = console.log("Even");
    }
} 
function showPrime(){
    if(a%2==1){
        let result = console.log("Number is Prime");
    } else {
        let result = console.log("Number is not Prime");
    }
} 
console.log(showOddorEven());
console.log(showPrime());