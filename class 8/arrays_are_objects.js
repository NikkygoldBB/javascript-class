//destructuring Arrays
const twoNum = [1,2,3,4,5,6,7,8,9,10];
//const twoNum = [1,2];
const [num1, num2,...otherNums]= twoNum;

console.log("num1", num1);
console.log("num2", num2);
console.log("otherNums", otherNums);

/*Desconstuction Objects

const student = {
    name: "ronke",
    age: "82",
    course: "Computer Science",
};

const { course, name, age} = student;

console.log("")
console.log()*/

/*function add (num1, num2,...nums) {
    console.log(nums);
    return num1 + num2;
}
const sum = add (10, 40, 20, 30, 50);
console.log(sum);*/


/*
// Destructuring Arrays
// const twoNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [num1, num2, ...otherNums] = twoNum;

// console.log("num1", num1);
// console.log("num2", num2);
// console.log("otherNums", otherNums);

// Destructuring Objects
// const student = {
//   name: "Ronke",
//   age: "82",
//   course: "Computer Science",
// };

// const { course, ...filteredStudent } = student;

// console.log("filteredStudent", filteredStudent);
// console.log("course", course);

// function add(num1, num2, ...nums) {
//   let res = 0;
//   for (const num of nums) {
//     res += num;
//   }
//   return res + num1 + num2;
// }
// const sum = add(10, 40, 20, 30, 50);
// console.log(sum);*/

// Spread
/*const student = {
  fullname: "John Doe",
   age: 50,
   height: 182, //cm
 };

const course = {
department: "Science and Technology",
course: "Computer Science",
duration: 3,
};

const studentAndCourseDetails = {};

for (const stdetails in student) {
  console.log("stdetails");

}*/

// const nv = Object.assign({}, student, course);
// const studentAndCourseDetails = { ...student, ...course };

// for (const stdetails in student) {
//   studentAndCourseDetails[stdetails] = student[stdetails];
// }

// for (const c in course) {
//   studentAndCourseDetails[c] = course[c];
// }
// console.log(nv);
// console.log(studentAndCourseDetails);

// - Nullish Coalescing (??)
// const student = {
//   fullname: "John Doe",
//   age: 50,
//   height: 182,
// };

// const displayValue = (key) => {
//   console.log(student[key] ?? "Not Found");
// };

// displayValue("tuition");

// - Optional Chaining (.?)
// const student = {
//   fullname: "John Doe",
//   age: 50,
//   height: 182,
// };

// student["calculateTuition"] = function (duration, pricePerSemester) {
//   return duration * pricePerSemester;
// };


