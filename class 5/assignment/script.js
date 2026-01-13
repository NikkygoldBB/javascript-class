// PART A
// NUM 1; Arithmetic Operators
let x = 10;
let y = 3;
console.log(x + y * 2);

// NUM 2
let result = (20 - 5) / 3;
console.log(result)

// 3

let remainder= 25 % 4
console.log("Remainder=", remainder) 

// num 4

let a = 7
let b = 2

let product = a * b;
console.log("Product=", product );

// PART B
// NUM 5 what will this code print?

console.log(5 == "5");

// Num 6; what will this print?

console.log(5 === "5");

// num 7; fill in the blank so the condition is true

console.log(10 > 8);

// Num 8: what is the output?

let age = 15;
console.log(age >= 16);

// part c
//  num 9; what is the output?
 console.log(true && false);

 // num 10; what is the output?
 console.log(false || true);

 /*num 11: what does the ! operator do in javascript?
The NOT (!) operator reverses a boolean value:
!true → false
!false → true */

 // num 12;what will this code print?

 let isStudent= true;
 let hasID= false;

 console.log(isStudent && hasID);
 
 // part D
 // num 13; what will be printed

 let number= 4;
 if(number % 2 === 0) {
    console.log("Even");
 } else {console.log("Odd");

 }

 // Num 14; write

 let score= 55;
 if (score>= 50) {
    console.log("pass");
 } else {
    console.log("fail"); }

    // Num 15; 

    if ( x = 5) {
    console.log("hello");
}

 // mum 16; what will the output be?
  let day= 3;

  switch (day) {
    case 1:
        console.log("Monday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        default:
         console.log("Unknown day");
  }
// num 17. write
//17. Write a switch statement that:
let grade = 90;

  switch (grade) {
  case 90:
    console.log("A");
    break;
  case 80:
    console.log("B");
    break;
  case 70:
    console.log("C");
    break;
  default:
    console.log("Fail");
}

/* Num 18:. Why is the break keyword important in a switch statement?
break stops the execution of the switch.
Without it, JavaScript continues executing the next cases (fall-through).*/

//Part F: Ternary Operator (10 points)

/* Num 19. Rewrite this code using a ternary operator?*/

let userAge = 20
if (userAge >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


// Num 20: What will this code output?
let temperature = 30;
let resultB = temperature > 25 ? "Hot" : "Cool";
console.log(resultB);


/* 21:Write a JavaScript program that:
* Checks if a number is positive, negative, or zero
* Uses if, else if, and else --> */

let num = 10;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
   




