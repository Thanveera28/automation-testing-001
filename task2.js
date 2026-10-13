/*
THEORY - Task 2

1. forEach():
   Loops through each element and executes a function. Does not return new array.
   Used to print student details.

2. map():
   Creates a NEW array by transforming each element.
   Used to get only names from students array.

3. filter():
   Creates a NEW array with elements that pass a condition.
   Used to get students who scored 80 or above.
*/





let students = [
    { name: "John", marks: 85, grade: "A" },
    { name: "David", marks: 72, grade: "B" },
    { name: "Peter", marks: 90, grade: "A+" },
    { name: "Sarah", marks: 65, grade: "C" }
];

// 1. forEach()
console.log("All Students:");
students.forEach((student) => {
    console.log(student.name + " - " + student.marks + " - " + student.grade);
});

// 2. map()
let names = students.map((student) => student.name);
console.log("\nStudent Names:");
console.log(names);

// 3. filter()
let result = students.filter((student) => student.marks >= 80);
console.log("\nStudents who scored 80 or above:");
console.log(result);