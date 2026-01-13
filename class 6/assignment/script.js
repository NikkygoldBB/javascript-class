/*Part A:
Given the following array:
let scores = [65, 80, 72, 90, 58, 100]; 
//1. Write code to:
Given array*/

let scores = [65, 80, 72, 90, 58, 100];
console.log(scores)

//a) Add a new score 85 to the array.

scores.push(85);
console.log(scores);

//b) Remove the last score from the array.

scores.pop();
console.log(scores);

//c) Display the total number of scores.

console.log("Total number of scores:", scores.length);

//2. Using a loop, calculate and display:
// a)The sum of all scores
//b) The average score

let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

let average = sum / scores.length;

console.log("Sum of scores:", sum);
console.log("Average score:", average);


//3. Write code to display only the scores greater than 70.
console.log("Scores greater than 70:");
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 70) {
        console.log(scores[i]);
    }
}


//Part B: Objects 
//Given the object below:
let student = {
 name: "Alex",
 age: 15,
 grade: 9,
 subjects: ["Math", "Science", "English"]};


//1. Write code to:
//a) Display the student’s name and grade.
console.log("Name:", student.name);
console.log("Grade:", student.grade);


//b) Add a new subject "History" to the subjects array.
student.subjects.push("History");
console.log(student.subjects);


//c) Change the student’s age to 16.
student.age = 16;
console.log(student.age);


//2) Using a loop, display all the subjects the student is taking.
console.log("Subjects:");
for (let i = 0; i < student.subjects.length; i++) {
    console.log(student.subjects[i]);
}

/*Part C:
1. Write a function called calculateAverage that:
o Takes an array of numbers as a parameter
o Returns the average of the numbers
function calculateAverage(numbers) {
your code here
}*/
function calculateAverage(numbers) {
 let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total / numbers.length;
}

//2. Call the function using the scores array from Part A and display the result.
let result = calculateAverage(scores);
console.log(result);

/*3. Write a function called isPass that:
o Takes a score as a parameter
o Returns "Pass" if the score is 50 or above
o Returns "Fail" if the score is below 50 */

function isPass(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(isPass(72));
console.log(isPass(45)); 

/*Part D: Challenge Question (Bonus – 10 marks)
Write a function called getTopScore that:
* Takes an array of numbers
* Returns the highest score in the array

*/

function getTopScore(numbers) {
    let highest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }

    return highest;
}
console.log(getTopScore(scores));