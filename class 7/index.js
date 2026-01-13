//console.log("hello world")

//Dom: THE document , OBJECT AND MODEL 
// tHE The Document Object Model (DOM) is a programming interface that represents the structure of an HTML or XML document as a tree of objects. It allows JavaScript to dynamically access, manipulate, and update the content, structure, and style of a document.


// IN SHORT:it's reference to a tree-like structure the browser uses to interprete an HTML document.

//access html element via tag name

const headers = document.
getElementsByTagName("h1");
//console.log(headers);

/*
inner text
----

<h1> happy new month<h1>

document.getElementByTagName("h1").
innerText

note: inner text gives us access tp Happy new year
*/
for (let i = 0; 1 < headers.
    length; i++) 
    {
    const header = headers[i];
    header.innerText = `javascript ${i + 1}`;
    }

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