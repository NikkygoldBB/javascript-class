//Arrays
// its a collection of items stores in memory locations adjacent to one another.
const name1 = "aderonke";
const name2 = "zaheed";
const name3 = "adepeju";

const names = ["aderonke", "zaheed", "adepeju"];

//console.log(names);
//console.log(names.length);
// Arrays and String
// strings are also Arrays or a form of Array
// stings are basically a collection of character.
//"a", "b", "c"... "z"
//const name1 = "bisola"
//name1 <- ["b""i""s""o""l""a"]

//console.log("Array Type", typeof names);
//console.log(typeof name1);
//console.log(typeof 777);

//how do i check if a variable is an array
//console.log(Array.isArray(name1));

//Access  items of the Array
//Bracket notation / property accessor
//console.log(names[2]);//trying to get element "zaheed"
/*Javascript has Zero-based indexing
const name0 = "aderonke";
const name1 = "zaheed";
const name2 = "adepeju";*/

// Modify array
/*console.log(names);
names[1] = "bisola";
console.log(names);*/

//Adding element to Array
//["aderonke," "zaheed" "adepeju" "bisola"]
names.push("bisola");
//console.log(names);

//remove an items from the array
//names.pop();
//console.log(names);
// note:pop does not only removes, it removes the last element and it returns it.
 /*const lastElement = names.pop();
 console.log(names);
 console.log("lastElement", lastElement);*/

 // remove specific items from an Array
 // 1.) first check for the index position of the items i.e console.log(names.indexOf("adepeju"));
 // 2.) check if its not minus 1 (-1) (i-e if its not present) but it should be present
 //3.) then splice it out i.e names.splice (adepejuIndex, 2); ( note: 2 is the position of the index)

 /*const adepejuIndex = names.indexOf("adepeju");
 if (adepejuIndex != -1) {
    names.splice(adepejuIndex, 2);
 }
 console.log(names);*/

 //how to copy part of the array
 
 //console.log(names.slice(0, 3));

 //string are array, can we perform the same array operation on them?
 //in most programming languages, sring are immutable

 //let namex = "Nikky Gold";
 //namex[0] = "D";
 //namex[1] = "i";
 //checking the length of arrays and strings

 // this is called concantination (or string Interpolation): joining two or more strings together
 //let namex2 = "G" + namex.slice(1, namex.length + 1);
 //console.log(namex.length);
 //console.log(namex2);

 /*const firstname = "Aderonke";
 const lastname = "KOlawole";
 const age = 35;*/

 //console.log(firstname + " " + lastname);

 //or 

 //console.log(firstname + " " + lastname + "! My age is: " + age);

 //string Interpolation using backticks (')

//console.log(`${firstname} ${lastname}! My age is: ${age}`);

/*loops (Iterative flow of executive)
 types of loops (five major)
 
 classic for loop: for(indexe; Condition; increment or decrement){}

 for...of loop: for(item...of...itemArray)

 for...in loop: for(items...in...itemArray) {}

 while loop: while{}

 do...while loop: do{}while()
 */

 //classic for loop for(index; Condition; increment or decrement){}
 // index is the staring point {}
//log this to my console (0.......10)
 /*note i++
 let i = 1;
 i = i + 1 // same as i++ 

 i--
 let i = 3;
 i = i- // same as i--   */ 

  /*for(let i = 0; i < 11; i++ ) {
   console.log(i);
  }*/

 //condition loop

 // variation 2
 //print all even numbers from 5-100
 //continue keyword: it skips a cycle of execution of the loop body and move on the next cycle.
 //break keyword - break out of the for loop
 /*let c =5;
 for (; c <= 100; c++) {
   if (c % 2 !== 0) {
      continue;
   }
   if (c == 56) {
      break;
   }
  console.log(c);
    
 }
 console.log("we are here now!"); */

 // Traversing/ modifying arrays using the classic for...loop
/*for (let i = 0; i < names.length; i++) {
   console.log(`${names[i]} is a number ${i + 1} student`);
}
*/

/*for (let i = 0; i < names.length; i++) {
   names[i] = `${names[i]} is a number ${i + 1} student`;
}
console.log(names); */

/*for(let i = 0; i < name1.length; i++) {
   console.log(name1[i]);
}*/

//getting the unicode
/*for(let i = 0; i < name1.length; i++) {
   console.log(name1[i].charCodeAt());
} */
 
   const unicodeName1 = [];
   for(let i = 0; i < name1.length; i++) {
   unicodeName1[i] = name1[i].charCodeAt();
}

//console.log(unicodeName1);


// for....of loop

/*for (let name of names) {
   name = "nikky";
   console.log(name); 
}*/

/*for (let i = 0; i < names.length.length; i++) {
   let name = names[i];
   console.log(name);
} */

   //for...in loop
   /*for(const key in names) {
      console.log(names[key]);
   } */

      // while...loop it execute the body, while the condition it true
      /*let num = 1;
      while(num <= 20) {
         if (num % 2 !== 0)
         console.log(num);
         num++;
         // body
      } */
   
        // console.log(unicodeName1); 
     // do...while loop : it does a particular action as well as the condition is true
     // create a new sting from unicode array 
   /*  const unicodeName1 = [];
   for(let i = 0; i < name1.length; i++) {
   unicodeName1[i] = name1[i].charCodeAt();
}*/
 let uniName = "";
 do {
   uniName += String.fromCharCode
   (unicodeName1.shift());
 } while(unicodeName1.length > 0);
console.log(uniName);
 // shift is the opposite if the pop, it removes the first item of the array and returns it*/