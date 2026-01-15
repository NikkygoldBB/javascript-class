/*TASK 1
// Use getElementById to change the text of the h1
// when the "Change Title" button is clicked*/

const changeTextBtn = 
document.getElementById("changeTextBtn");

const mainTitle = 
document.getElementById("main-title");

changeTextBtn.addEventListener("click", function () {
  mainTitle.textContent = "Welcome to JavaScript DOM Manipulation!";
  changeTextBtn.disabled = true; // Bonus: disable after click
});

/*TASK 2
// Use getElementsByTagName to change the color
// of all <p> elements when the "Style Paragraphs" button is clicked */

const styleBtn = 
document.getElementById("styleBtn");
const paragraphs = 
document.getElementsByTagName("p");

styleBtn.addEventListener("click", function () {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
    paragraphs[i].style.fontWeight = "bold";
  }
  styleBtn.disabled = true;
});


/*TASK 3
// Use querySelector to select the first <li>
// and add the "highlight" class when the "Highlight First Item" button is clicked*/

const highlightBtn = document.getElementById("highlightBtn");
const firstListItem = document.querySelector("li");

highlightBtn.addEventListener("click", function () {
  firstListItem.classList.add("highlight");
  highlightBtn.disabled = true; 
});



/*Optional Extension (Bonus)
* Disable a button after it is clicked
* Change background color of the page using JavaScript
* Use querySelectorAll instead of getElementsByTagName*/





