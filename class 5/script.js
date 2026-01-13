/*
var keyboard: it declares a variable, it is the old version introduced in JS and it is globally scoped.

let keyboard: it declares a variable, it is locally scoped
*/

/* const keyword: it declare variable that can't be reassigned, but the variable is not immutabe.
*/

// {} ===> this is a block of code.

// globally scoped variable are accessible by thier local scopes.
// locally scoped variable are only accessible by thier local scopes.

/*const nums = [1, 2, 3, 4, 5];

console.log(nums); */

/*  comparison Operators
== : equal to (only values)
=== : eqaul to ( with types checking)
!= : not eqaul
!== : not eqaul ( with types checking)
> : greater than
< : less than
>= : greater than or eqaul to
<= : less than or equal to

*/

/*console.log(5 == 5);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 5);
console.log(5 != "5");
console.log(5 !== "5");
console.log(5 > 5);
console.log(10 < 5);
console.log(20 >= 6);
console.log(50 <= 10); */

/*let x = 5;
let y = 5;
console.log( x === y); this will be true because they're the same value

let x = 5;
let y = "5";
console.log( x === y); this will be false becuase it's checking data type i.e value and string ( 5 and "5") */


/*console.log("ant" < "bant");
console.log("A".charCodeAt());  
console.log("b".charCodeAt()); */

/*console.log ("Z" > "z");
console.log("Z".charCodeAt());  
console.log("z".charCodeAt()) */

/*
conditioners

if and if else
tenenary 
switch

*/ 

// if condition
/*let money = 50;
let price = 100;
if(money >= price) {
    console.log("buy super yogo");
} */


// if else condition

/*let money = 50;
let price = 100;
if(money >= price) {
    console.log("buy super yogo");
} else {
    console.log("buy fan ice");
} */

// if else and if else

   /* let moneyGive = 50;
    let superYogoPrice = 100;
    let fanIcePrice =70;
    let fanDangoprice =50;

 if (moneyGive >= superYogoPrice) {
    console.log("Buy Super Yogo");
 } 
 else if (moneyGive >= fanIcePrice) {
    console.log("Buy Fan Ice");
    } else if (moneyGive >= fanDangoprice) {
        console.log("Buy fan Dango");
    } else {
        console.log("Go home");
    } */

        // Wuestion
        // What does code snippet do?

 /* (num % 2 === 0) {
    console.log("Yes");
 } else {
    console.log("No");
 } */

    // Ternary (?:)
    //condition > ? < what happens if true> : <what happens if false>
    /*const num = 45
    const isEvenOrOdd = num % 2 === 0 ? "is even" : "is odd";
    console.log(isEvenOrOdd);*/

    // Question
    /*const v = 5;
    console.log(v !== 10 ? "Not the same" : "They are same") */

    // switch statement
   // console.log(new Date().getTime());
 
  const month = new Date().getMonth();
if (month === 0) {
    console.log ("January");
} else if (month === 1) {
    console.log ("February");
} else if (month === 2) {
    console.log ("March");
} else if (month === 3) {
    console.log ("April");
} else if (month === 4) {
    console.log ("May");
} else if (month === 5) {
    console.log ("June");
} else if (month === 6) {
    console.log ("July");
} else if (month === 7) {
    console.log ("August");
} else if (month === 8) {
    console.log ("September");
} else if (month === 9) {
    console.log ("October");
} else if (month === 10) {
    console.log ("November");
} else if (month === 11) {
    console.log ("December");
} else {
    console.log("Invalid Input");
} 

 // instead of using this we make use of SWITCH STATEMENT 
  
  
    switch (month) {
        case 0 :
            console.log ("January");
            break;
        case 1:
            console.log ("February");
            break;
        case 2:
             console.log ("March");
            break;
        case 3:
             console.log ("April");
            break;
        case 4:
             console.log ("May"); 
            break;
        case 5:
             console.log ("June");
            break;
        case 6: 
            console.log ("July");
            break;
        case 7:
             console.log ("August");
            break;
        case 8: 
              console.log ("September");
            break;
        case 9: 
               console.log ("October");
            break;
        case 10:
            console.log ("November");
            break;
        case 11: 
            console.log ("December");
            break;
        default:
            console.log("Invalid Input");
    }










