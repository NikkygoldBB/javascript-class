const student = {
  name: "John Doe",
  course: "Computer Science",
};

const fullName = "John Doe";
const course = "Computer Science";

window.localStorage.setItem("fullName", fullName);
window.localStorage.setItem("course", course);
window.localStorage.setItem("student", JSON.stringify(student));

// console.log(JSON.parse(window.localStorage.getItem("student")));

window.localStorage.removeItem("student");

window.localStorage.clear();
