//console.log("Its Working");
/*const ulist = document.
getElementById("optionList");

//console.log(ulist);

function onLiClick(event, emoji) {
 alert("you just clicked on" + event.target.innerText + emoji);

 }

 ulist.addEventListener("click", function 
  (event) {
  if(event.target && event.target.nodeName === "LI") {
    onLiClick(event)
  }
  
 });

 
/*function wrapperOnClick(event) {
  const emoji = "";// add emoji
   onLiClick(event, emoji)
}*/


/*for(const li of document.getElementsByTagName("li")) {

     li.addEventListener("click", onLiClick);
}


//} function wrapperOnClick(event) {
  //  const emoji = "";// add emoji
   // onLiClick(event, emoji)*/
//}*/
/*Arrow Function
  showAgefn(age)
  = (age) => {
    console.log("Your age is + age");
}*/
      // anonymous function
  /*const anonym = function () {
    console.log("This is anonymous");
  };

  anonym();*/
        
      // assign function to variable
    /*const showAgefn = function (age) {
    console.log("Your age is" + age);
    };
    showAgefn(10);*/

/*for (const li of document.getElementsByTagName("Li")) 
{
    li.addEventListener("click", function (event) {
      console.log(event.target.innerText);
    });
  }*/

  //arrow function for this
/*for (const li of document.getElementsByTagName("Li")) 
{
    li.addEventListener("click", (event) => {
      console.log(event.target.innerText);
    });
  }*/



/// an anonymous function is a function without a name, -- it uses cases, --- one off functions that wont be needed again'
// assign functions to variables


// note:disk keyword is basically a reference an object that owns a particular value 
/*const counter = {
    count: 0,
    increment: function () {
      console.log(this);
        setInterval(function() {
          console.log(this);
            this.count = this.count + 1;
            console.log(this.count);
      }, 1008);
    },
};
console.log(counter.increment());*/


/*const counter = {
    count: 0,
    increment: function () {
      console.log(this);
        setInterval(() => {
          console.log(this);
            this.count = this.count + 1;
            console.log(this.count);
      }, 1008);
    },
};
console.log(counter.increment());*/



 /* setinterval defination and function :
setInterval(function() {
          console.log("I love Zee");
      }, 1000);*/




/*Topics
------
event Delegation
Major ES6 - features
-----
- Anonymous functions
- Arrow Function
- Destruction (Arrays and Objects)
- spread and rest operator
- classes
- promises
-
*/
//.... whats event Delegation
/// major different bettween Arrow function and anonymous

//.... whats event Delegation

/* spread operator

const student = {
    fullname: "john Deo",
    age: 58
    height: 182, //cn
};

  const course = {
    department: "science and Technology",
    course: "computer science",
    duration: 3,
  };

  const studentAndCourseDetails = {};*/

  /*for (const stdetails in student) {
    studentAndCourseDetails[stdetails] = student[stdetails];

  }

  for (const c in course) {
    studentAndCourseDetails[c] = course [c];
  }*/

    /*nullishin coslescing (??)

    const student = {
    fullname: "john Deo",
    age: 58
    height: 182, };

    const displayValue("key") => {
        console.log[student[key]]?? "not found";
    };
    displayValue("tuition");*/

    //optional chaining (.?)


