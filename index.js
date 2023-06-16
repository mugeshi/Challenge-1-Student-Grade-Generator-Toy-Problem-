const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the student's marks (between 0 and 100): ", (input) => {
  const studentMarks = Number(input);

  if (!isNaN(studentMarks) && studentMarks >= 0 && studentMarks <= 100) {
    let grade;
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

    console.log(`The student's grade is: ${grade}`);
  } else {
    console.log('Invalid input. Please enter a number between 0 and 100.');
  }

  rl.close();
});

