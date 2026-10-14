
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