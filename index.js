const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter the student's marks
rl.question("Enter the student's marks (between 0 and 100): ", (input) => {
  // Convert the user's input to a number
  const studentMarks = Number(input);

  // Check if the input is a valid number between 0 and 100
  if (!isNaN(studentMarks) && studentMarks >= 0 && studentMarks <= 100) {
    let grade;

    // Determine the grade based on the student's marks
    if (studentMarks > 79) {
      grade = 'A';
    } else if (studentMarks >= 60) {
      grade = 'B';
    } else if (studentMarks >= 50) {
      grade = 'C';
    } else if (studentMarks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    // Output the student's grade
    console.log(`The student's grade is: ${grade}`);
  } else {
    // Display an error message for invalid input
    console.log('Invalid input. Please enter a number between 0 and 100.');
  }

  // Close the readline interface
  rl.close();
});
