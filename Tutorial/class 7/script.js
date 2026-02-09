/*TASK 1
// Use getElementById to change the text of the h1
// when the "Change Title" button is clicked*/

const changeTextBtn = 
document.getElementById("changeTextBtn");

const mainTitle = 
document.getElementById("main-title");

changeTextBtn.addEventListener("click", function () {
  mainTitle.textContent = "Welcome to JavaScript DOM Manipulation!";

});


//changeTextBtn.disabled = true; // Bonus: disable after click



const styleBtn = 
document.getElementById("styleBtn");
const paragraphs = 
document.getElementsByTagName("p");

styleBtn.addEventListener("click", function () {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
    paragraphs[i].style.fontWeight = "bold";
  }
  //styleBtn.disabled = true;
});



 styleBtn.disabled = true;




