/*
THEORY - Task 1

1. Regular Function:
   Normal function using 'function' keyword. Reusable block of code.
   Eg: function calculateResult(marks) { ... }

2. Arrow Function:
   Short syntax introduced in ES6. Uses => symbol.
   Eg: const displayResult = (name, result) => { ... }

3. Control Flow (if-else):
   Decides which code to run based on condition.
   If marks >= 50 -> Pass, else -> Fail.

4. for...of loop:
   Loops through each item in array one by one.
*/



function calculateResult(marks) {
    if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let displayResult = (name, result) => {
    console.log(name + " - " + result);
};

let learners = [
    { name: "Anu", marks: 75 },
    { name: "Rahul", marks: 42 },
    { name: "Meena", marks: 68 },
    { name: "Arun", marks: 35 }
];

for (let learner of learners) {
    let result = calculateResult(learner.marks);
    displayResult(learner.name, result);
}