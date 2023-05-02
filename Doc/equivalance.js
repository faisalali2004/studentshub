// Define constants for grade point values
const gradePoints = {
    "A*": 4.0,
    "A": 4.0,
    "B": 3.0,
    "C": 2.0,
    "D": 1.0,
    "E": 0.0,
  };
  
  // Define a function to calculate FSC equivalent marks
  function calculateFSC() {
    // Get the grades entered by the user
    const olevel1 = document.getElementById("olevel1").value.toUpperCase();
    const olevel2 = document.getElementById("olevel2").value.toUpperCase();
    const olevel3 = document.getElementById("olevel3").value.toUpperCase();
    const olevel4 = document.getElementById("olevel4").value.toUpperCase();
    const olevel5 = document.getElementById("olevel5").value.toUpperCase();
    const olevel6 = document.getElementById("olevel6").value.toUpperCase();
    const grade1 = document.getElementById("grade1").value.toUpperCase();
    const grade2 = document.getElementById("grade2").value.toUpperCase();
    const grade3 = document.getElementById("grade3").value.toUpperCase();
    const grade4 = document.getElementById("grade4").value.toUpperCase();
    const grade5 = document.getElementById("grade5").value.toUpperCase();
  
    // Calculate the total grade points for O-Level subjects
    const olevelPoints = gradePoints[olevel1] + gradePoints[olevel2] + gradePoints[olevel3] + gradePoints[olevel4] + gradePoints[olevel5] + gradePoints[olevel6];
  
    // Calculate the total grade points for A-Level subjects
    const alevelPoints = gradePoints[grade3] + gradePoints[grade4] + gradePoints[grade5];
  
    // Calculate the FSC equivalent marks
    const fscMarks = Math.round((olevelPoints / 6 * 70) + (alevelPoints / 3 * 30));
  
    // Update the result on the page
    document.getElementById("fsc-marks").textContent = fscMarks;
  }
  
  // Add an event listener to the form to call the calculateFSC function when it is submitted
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateFSC();
  });
  