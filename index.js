// create an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male"
}
console.log(person.firstName)

let liberian = {
    id: 400,
    available: true,
    count: 2,
    name :"Dahlia",
    author: "Ben"
}
console.log(liberian)

//  operators

let number = 5;
let result = (number > 2)? true: false;
console.log(result);

if(number > 2){
    console.log(true);

}else {
    console.log(false)
}

// operator2
// let operator ={
//     add : "+",
//     sub: "-",
//     multiply: "*",
//     divide : "/"
// }

// let left_operand = 5;
// let right_operand = 10;
// let operator = "-";

// if(operator == "+"){
//     console.log(left_operand + right_operand);

// }
// elif(operator == "-");{
//     console.log(left_operand - right_operand);
// }
// elif(operator == "*");{
//     console.log(left_operand * right_operand);
// }
// elif(operator == "/");{
//     console.log(left_operand / right_operand);
// }
// //Nested Function
function calculate (x){   //function declaration
    function secondNum(a){
        return a * x;
    }
    return secondNum;
}

let result1 = calculate(3);
console.log(result1(2));
console.log(calculate(3)(2));

//function expression
const answer = function(params){   
}

// function as an argument
function higherOrderFunction(func){
    console.log("higher function")
    func();
}

function lowerOrderFunction(){
    console.log("lower function")
}

higherOrderFunction(lowerOrderFunction);
 

// 
function greetings(greet){
    return function person(name){
        return `Hello, ${name}. ${greet}`  ;
    }
}
console.log(greetings("Good morning!")(John));