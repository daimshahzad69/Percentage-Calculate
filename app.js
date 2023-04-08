// Prompt the user to enter the marks for five subjects
let subject1 = parseFloat(prompt("Enter the marks for Microbiology"));
let subject2 = parseFloat(prompt("Enter the marks for Oral Communication"));
let subject3 = parseFloat(prompt("Enter the marks for English"));
let subject4 = parseFloat(prompt("Enter the marks for Artificial Intelligence"));
let subject5 = parseFloat(prompt("Enter the marks for Computer"));

// Calculate the total marks and percentage
let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
let percentage = (totalMarks / 500) * 100;

// Determine the grade based on the percentage
let grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

// Display the results
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);