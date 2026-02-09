/*  (1) method of a class, they allow us to have access to a class
const s = new Set();

const student = {     // properties of class 
  name: "John Doe",
};
console.log(student.name);
console.log(s.size);  */

 /* (2) class Student {
  id = 0; // properties
  name = ""; // properties
  DoB = new Date().toISOString(); // properties
  height = 0; // properties
  gender = ""; // properties

 }
 const student1 = new Student();
   student1.id = 1;
   student1.name ="Aderonke";
   student1.DoB = "1997-01-15T13:10:44.370Z";
   student1.height = 178;
   student1.gender = "F";

    

  const student2 = new Student();
   student2.id = 1;
   student2.name ="Zaheed";
   student2.DoB = "1997-01-15T13:10:44.370Z";
   student2.height = 178;
   student2.gender = "F";


   console.log(student1);
   console.log(student2);  */
    

 //note: instead of rewriting everything you can as well write this in a shorter form

  /* (3) 
  class Student {
  id = 0; // properties
  name = ""; // properties
  DoB = new Date().toISOString(); // properties
  height = 0; // properties
  gender = ""; // properties


  constructor(sid, fname, height, sgender, DOB) {
    this.id = sid;
    this.name = fname;
    this.DoB = DOB;
    this.height = height;
    this.gender = sgender;
  }
 }
 const student1 = new Student(1, "Aderonke","1997-01-15T13:10:44.370Z", 178, "F",);

    // or note: its actually same, just intentionally styled it 
  const student2 = new Student(
   2,
  "Zaheed",
  "1995-12-15T13:10:44.370Z",
  178,
  "M",
);

// to create a new one 

 const student3 = new Student(1, "Bisola","2002-12-15T13:10:44.370Z", 178, "F",);

 //note: let assume you want to change student 1 id, all you need to do is

 student1.id = 1000; // once you saved it its going to update itself to 1000, so in this case anybody can change your code , 
 // thats when the private properties comes in, to avoid being change by anybody

   console.log(student1);
   console.log(student2);
   console.log(student3); */
    



 /*PRIVATE PROPERTY: to keep your property private, all you need to put hash tag (#) to make it inaccessable outside of your class
   //for example; 


(4)

class Student {
  id = 0; // properties
  name = ""; // properties
  DoB = new Date().toISOString(); // properties
  height = 0; // properties
  gender = ""; // properties

constructor(sid, fname, height, sgender, DOB) {
    this.#id = sid;
    this.#name = fname;
    this.#DoB = DOB;
    this.#height = height;
    this.#gender = sgender;
 }
  }
 
 const student1 = new Student(1, "Aderonke","1997-01-15T13:10:44.370Z", 178, "F",);

  const student2 = new Student(2,"Zaheed","1995-12-15T13:10:44.370Z", 178,"M",);

 const student3 = new Student(1, "Bisola","2002-12-15T13:10:44.370Z", 178, "F",);


   //so when you write this
     student1.#id = 1000; //it will bring out a syntax error because it has been privatizei.e you cant change it outside of the initial class
  // something like this: Private field '#id' must be declared in an enclosing class

   console.log(student1);
   console.log(student2);
   console.log(student3); */
    

  /*
  //how to access a private properties, we use getter and setters
   //Getter allows us to get a private properties why Setter alLows us To update a private Properties
   
   //(5)

class Student {
  #id = 0; // properties
  #name = ""; // properties
  #DoB = new Date().toISOString(); // properties
  #height = 0; // properties
  #gender = ""; // properties

constructor(sid, fname, DOB, height, sgender) {
    this.#id = sid;
    this.#name = fname;
    this.#DoB = DOB;
    this.#height = height;
    this.#gender = sgender;
 }
 // PUT A GETTER FOR NAME
   getName() {
    return this.#name;
  }
  // id getter
  getId() {
    return this.#id;
  }

  // dob getter
  getDoB() {
    return this.#DoB;
  }

  //height getter
  getHeight() {
    return this.#height;
  }

  // gender getter
  getGender() {
    return this.#gender;
  }

  setName(newName) {
    if (newName.length == 0) {
     throw Error("Invalid name");
    }
    this.#name = newName;
  }

   setDob(newDOB) {
    if (newDOB.length == 0) {
     throw Error("Invalid DOB");
    }
    this.#DoB= newDOB;
  } 

 // to get student name everyyear through thier date of birth

  // Get student age
  getAge(year) {
    const dob = new Date(this.#DoB);
    const yearBorn = dob.getFullYear();
    if (!year || year < yearBorn) {
     throw Error("Invalid. Year less than student birth year");
    }
   return year - yearBorn;
 }
}

  

 const student1 = new Student(1, "Aderonke","1997-01-15T13:10:44.370Z", 165, "F",);

  const student2 = new Student(2,"Zaheed","1995-12-15T13:10:44.370Z", 178,"M",);

 const student3 = new Student(3, "Bisola","2002-12-15T13:10:44.370Z", 160, "F",);


   console.log(student1);
   console.log(student2);
   console.log(student3); 


   //note: because its private property, you can only get it propert through Getter 
   e.g  getting id
   console.log(student1.getId());
   console.log(student2.getId());
   console.log(student3.getId()); 

   getting name

    console.log(student1.getName());
   console.log(student2.getName());
   console.log(student3.getName());  same thing applicable to dOB, height and gender*/

  


  /* to get student name everyyear through thier date of birth
  //(6) example

  class Student {
  #id = 0; // properties
  #name = ""; // properties
  #DoB = new Date().toISOString(); // properties
  #height = 0; // properties
  #gender = ""; // properties

constructor(sid, fname, DOB, height, sgender) {
    this.#id = sid;
    this.#name = fname;
    this.#DoB = DOB;
    this.#height = height;
    this.#gender = sgender;
 }
 // PUT A GETTER FOR NAME
   getName() {
    return this.#name;
  }
  // id getter
  getId() {
    return this.#id;
  }

  // dob getter
  getDoB() {
    return this.#DoB;
  }

  //height getter
  getHeight() {
    return this.#height;
  }

  // gender getter
  getGender() {
    return this.#gender;
  }

  setName(newName) {
    if (newName.length == 0) {
     throw Error("Invalid name");
    }
    this.#name = newName;
  }

   setDob(newDOB) {
    if (newDOB.length == 0) {
     throw Error("Invalid DOB");
    }
    this.#DoB= newDOB;
  } 

 // to get student name everyyear through thier date of birth

  // Get student age
  getAge(year) {
    const dob = new Date(this.#DoB);
    const yearBorn = dob.getFullYear();
    if (!year || year < yearBorn) {
     throw Error("Invalid. Year less than student birth year");
    }
   return year - yearBorn;
 }
}

  

 const student1 = new Student(1, "Aderonke","1997-01-15T13:10:44.370Z", 165, "F",);

  const student2 = new Student(2,"Zaheed","1995-12-15T13:10:44.370Z", 178,"M",);

 const student3 = new Student(3, "Bisola","2002-12-15T13:10:44.370Z", 160, "F",);


 console.log(student1.getAge(2026));
   console.log(student2.getAge(2026));
   console.log(student3.getAge(2026));  */



 
/* (7)

class Student {
  #id = 0; // properties
  #name = ""; // properties
  #DoB = new Date().toISOString(); // properties
  #height = 0; // properties
  #gender = ""; // properties

constructor(sid, fname, DOB, height, sgender) {
    this.#id = sid;
    this.#name = fname;
    this.#DoB = DOB;
    this.#height = height;
    this.#gender = sgender;
}
}

   class StudentList {
  #all_students = [];

  constructor(list_of_students) {
    for (const student of list_of_students) {
      this.#all_students.push(student);
    }
  }

  getAllStudents() {
  
    return this.#all_students;
  }
}

  const allStudents = new StudentList([
new Student(1, "Aderonke","1997-01-15T13:10:44.370Z", 165, "F"),
new Student(2,"Zaheed","1995-12-15T13:10:44.370Z", 178,"M"),
new Student(3, "Bisola","2002-12-15T13:10:44.370Z", 160, "F"),
]);

console.log(allStudents); */



/*
//(8) how to Get students based on their ID e.g I pass in an Id of 1 and it gives me student bisola


class Student {
  #id = 0; // properties
  #name = ""; // properties
  #DoB = new Date().toISOString(); // properties
  #height = 0; // properties
  #gender = ""; // properties

constructor(sid, fname, DOB, height, sgender) {
    this.#id = sid;
    this.#name = fname;
    this.#DoB = DOB;
    this.#height = height;
    this.#gender = sgender;
}

// dont forget that the student ID is a private property, so to get it you must use getter
 getId() {
    return this.#id;
  }
}

  class StudentList {
  #all_students = [];

  constructor(list_of_students) {
    for (const student of list_of_students) {
      this.#all_students.push(student);
    }
  }

 getStudentById(sid) {
for(const student of this.#all_students) {
    if(student.getId() == sid) {
    return student;
  }
}
  throw Error(`Student with the id: ${sid} was not found`);
 }
    getAllStudents() {
      return this.#all_students;
    }
  }
  
const allStudents = new StudentList([
new Student(1, "Aderonke","1997-01-15T13:10:44.370Z", 165, "F"),
new Student(2,"Zaheed","1995-12-15T13:10:44.370Z", 178,"M"),
new Student(3, "Bisola","2002-12-15T13:10:44.370Z", 160, "F"),
]);

console.log(allStudents.getStudentById(1));// if you want to get others ID you can input thier number
*/




/*
// (9) what if we have like a object of a thousand students


class Student {
  #id = 0; // properties
  #name = ""; // properties
  #DoB = new Date().toISOString(); // properties
  #height = 0; // properties
  #gender = ""; // properties

constructor(sid, fname, DOB, height, sgender) {
    this.#id = sid;
    this.#name = fname;
    this.#DoB = DOB;
    this.#height = height;
    this.#gender = sgender;
}

//getter
 getId() {
    return this.#id;
  }
}

  class StudentList {
  #all_students = [];

  constructor(list_of_students) {
    for (const student of list_of_students) {
      this.#all_students.push(student);
    }
  }

 getStudentById(sid) {
for(const student of this.#all_students) {
    if(student.getId() == sid) {
    return student;
  }
}
  throw Error(`Student with the id: ${sid} was not found`);
 }
    getAllStudents() {
      return this.#all_students;
    }
  }
  
//create an array of a thousand student
  const thousandStudent = [];
  for (let i = 0; i < 10000; i++) {
  const isEven = i % 2 == 0;
  thousandStudent.push(
    new Student(
      i + 4,
      "Aderonke" + i + 4,
      165,
      isEven ? "F" : "M",
      "1997-01-15T13:10:44.370Z",
    ),
  );
}

const allStudents = new StudentList([
new Student(1, "Aderonke","1997-01-15T13:10:44.370Z", 165, "F"),
new Student(2,"Zaheed","1995-12-15T13:10:44.370Z", 178,"M"),
new Student(3, "Bisola","2002-12-15T13:10:44.370Z", 160, "F"),
...thousandStudent,
]);

console.log(allStudents);// out put thousands of arrays of student
*/
 
// (10) to speed the search of student faster instead of going through all numbers, i.e the shorter form.
// you're going to make use of the map class



class Student {
  #id = 0; // properties
  #name = ""; // properties
  #DoB = new Date().toISOString(); // properties
  #height = 0; // properties
  #gender = ""; // properties

constructor(sid, fname, DOB, height, sgender) {
    this.#id = sid;
    this.#name = fname;
    this.#DoB = DOB;
    this.#height = height;
    this.#gender = sgender;
}

//getter
 getId() {
    return this.#id;
  }
}

  class StudentList {
  #all_students = new Map();
   // note: instead of using array ([]) i.e ( #all_students = []; ), 
   // we make use of map class i.e ( #all_students = new Map();)

  constructor(list_of_students) {
    for (const student of list_of_students) {
      this.#all_students.set(student.getId(), student);// note: instead of (push) i.e (this.#all_students.push(student);)
      // we make use of (set) and set the ID of the ( student.id) as our key and set the value as (student)
      //i.e (this.#all_students.set(student.id, student);)  
    }
  }

 getStudentById(sid) {
 if(!this.#all_students.has(sid)) {
    throw Error(`Student with the id: ${sid} was not found`);
  }

  return this.#all_students.get(sid);
}
  
    getAllStudents() {
      return this.#all_students;
    }
  }
  
//create an array of a thousand student
  const thousandStudent = [];
  for (let i = 0; i < 10000; i++) {
  const isEven = i % 2 == 0;
  thousandStudent.push(
    new Student(
      i + 4,
      "Aderonke" + i + 4,
      165,
      isEven ? "F" : "M",
      "1997-01-15T13:10:44.370Z",
    ),
  );
}

const allStudents = new StudentList([
new Student(1, "Aderonke","1997-01-15T13:10:44.370Z", 165, "F"),
new Student(2,"Zaheed","1995-12-15T13:10:44.370Z", 178,"M"),
new Student(3, "Bisola","2002-12-15T13:10:44.370Z", 160, "F"),
...thousandStudent,
]);

console.log(allStudents);




/*
  class StudentList {
  #all_students = new Map();

  constructor(list_of_students) {
    for (const student of list_of_students) {
      this.#all_students.set(student.getId(), student);
    }
  }
  
  getStudentById(sid) {
    if (!this.#all_students.has(sid)) {
      throw Error(Student with the id: ${sid} was not found.);
    }

    return this.#all_students.get(sid);
  }

  777777
  
  
  getAllStudents() {
    return this.#all_students;
  }
}

const thousandStudent = [];

for (let i = 0; i < 10000; i++) {
  const isEven = i % 2 == 0;
  thousandStudent.push(
    new Student(
      i + 4,
      "Bisola" + i + 4,
      178,
      isEven ? "F" : "M",
      "2000-03-15T13:10:44.370Z",
    ),
  );
}

const allStudents = new StudentList([
  new Student(1, "Bisola", 178, "F", "2000-03-15T13:10:44.370Z"),
  new Student(2, "Aderonke", 161, "F", "2003-03-15T13:10:44.370Z"),
  new Student(3, "Zaheed", 170, "M", "2007-01-15T13:10:44.370Z"),
  ...thousandStudent,
]);

// Get students based on their ID e.g I pass in an Id of 1 and it gives me student bisola
console.log(allStudents.getStudentById(13300));

// course (grade, name, duration, pass mark, fail mark) */
