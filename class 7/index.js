//console.log("hello world")

//Dom: THE document , OBJECT AND MODEL 
// tHE The Document Object Model (DOM) is a programming interface that represents the structure of an HTML or XML document as a tree of objects. It allows JavaScript to dynamically access, manipulate, and update the content, structure, and style of a document.


// IN SHORT:it's reference to a tree-like structure the browser uses to interprete an HTML document.

//access html element via tag name

/*const headers = document.
getElementsByTagName("h1");*/

//console.log(headers);

/*
inner text
----

<h1> happy new month<h1>

document.getElementByTagName("h1").
innerText

note: inner text gives us access tp Happy new year
*/
/*for (let i = 0; 1 < headers.
    length; i++) 
    {
    const header = headers[i];
    header.innerText = `javascript ${i + 1}`;
    }*/

/*for (let i = 0; 1 < headers.length; i++) 
 {
    const header = headers[i];
    console.log(header.innerText)


 } */

    /*
    Tag Accessors
    ---- */

    /*document.getElementsByTagName()
    document.getElementById()
    document.getElementsByClassName()
    document.querySelector()
    document.querySelectorAll()*/

    /*
    other ways to select an HTML Element */

    //getElementById()

    /*const paragraph = document.
    getElementById("paragraph1");
    console.log(paragraph);*/

    //getElementsByClassName()
    /*const paragraph =  document.
   getElementsByClassName("header1");
    console.log(paragraph);*/

    
//.querySelector()
/*const element = document.querySelector("header1")
console.log(element);*/
//getting element based on class name, ypu have to prefix the class name with a `.(dot)`.
/*const element = document.querySelector(".header1")
console.log(element);*/

//getting element based on id, you have to prefix the id name with a '#'

/*const element = document.
querySelector("#paragraph1");
console.log(element);*/

//query selector
//console.log(document.querySelectorAll("p"));

//HTMLCollection vs Nodelist

/*const pHtmlCollection = document.
getElementsByTagName("p");

const pNodeList = document.
querySelectorAll("p");

console.log(pHtmlCollection); //live
console.log(pNodeList); // static*/

/*for(const item of pHtmlCollection) {
   item.innerText ="The class is going fine"; console.log(item.innerText);}*/
 
/*for(const item of pNodeList) {
    item.innerText = "The class is going fine";
    console.log(item.innerText)
}*/


/*const pHtmlCollection = document.
getElementsByTagName("p");

const pNodeList = document.
querySelectorAll("p");

console.log(pHtmlCollection); //live
console.log(pNodeList); // static

const newP = document.createElement("p");
newP.innerText = "Newly created";
newP.id = "paragraph3";

document.getElementsByTagName("body")
[0].appendChild(newP); */





