const hideButton = document.
getElementById("reveal_button");
const p1 = document.getElementById
("paragragh1");
const p2 = document.getElementById
("paragragh2");

//console.log(p1.style.display == "none"); 
//const p3 = document.getElementById("paragragh1");


//console.log(hideButton);

/*function onbuttonclick(event) {
    console.log(event);
    console.log("button clicked");
}*/

function onButtonclick(event) {
    //console.log(p1.style);
    if (p1.style.display == "block" &&
    p2.style.display == "block") {
       hideButton.innerText = "click here to read more"; 
    p1.style.display = "none";
    p2.style.display = "none";
    } else {
         hideButton.innerText ="click here to show less";

    p1.style.display = "block";
    p2.style.display = "block";
    }
    
}

    //console.log(p2.getAttribute("style"));
    /*console.log(p2.getAttribute("style"))
    console.log(p1.getAttribute("style"))*/


//trigger the 'onButtonClick' function on click of 'hideButton'
hideButton.addEventListener("click",onButtonclick);

