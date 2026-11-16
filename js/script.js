let students = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];
  let grades = [92, 85, 78, 97, 74];

  // Start of output table
  let output = "<h2>Grade Equivalents</h2>";
  output = output + "<table>";
  output = output + "<tr>";
  output = output + "<th>Student Name</th>";
  output = output + "<th>Grade</th>";
  output = output + "<th>Equivalent</th>";
  output = output + "<th>Remark</th>";
  output = output + "<th>Academic Leader</th>";
  output = output + "</tr>";

  // For loop to access contents of arrays
  // Perform grade evaluation for each student within the loop
  for (let i = 0; i < students.length; i++) {
    let equivalent = getEquivalent(grades[i]); // Pass grade to getEquivalent()
    let remark = getRemark(grades[i]); // Pass grade to getRemark()
    let leader = getAcademicLeader(equivalent); // Pass equivalent to getAcademicLeader()

    output = output + "<tr>";
    output = output + "<td>" + students[i] + "</td>";
    output = output + "<td>" + grades[i] + "</td>"; // new data grade
    output = output + "<td>" + equivalent + "</td>"; // equivalent value
    output = output + "<td>" + remark + "</td>"; // remark value
    output = output + "<td>" + leader + "</td>"; // academic class
    output = output + "</tr>";
  }

  output = output + "</table>";

  // Show the output result inside the html
  document.getElementById("result").innerHTML = output;
 

// Function getRemark() - Ternary Operator
// If the grade is 75 or higher, return "Passed".
// Otherwise, return "Failed".
function getRemark(grade) {
  let remark = grade >= 75 ? "Passed" : "Failed";
  return remark;
}

// Function getEquivalent() - Converts numerical grade into grade equivalent
// Uses if...else if conditional statements to check grade range
// A grade of 75 is equivalent to 3.0, while grades below 75 are marked as Failed (5.0)
function getEquivalent(grade) {
  let equivalent = "";

  if (grade >= 97) {
    equivalent = "1.0";
  } else if (grade >= 94) {
    equivalent = "1.25";
  } else if (grade >= 91) {
    equivalent = "1.5";
  } else if (grade >= 88) {
    equivalent = "1.75";
  } else if (grade >= 85) {
    equivalent = "2.0";
  } else if (grade >= 82) {
    equivalent = "2.25";
  } else if (grade >= 79) {
    equivalent = "2.5";
  } else if (grade >= 76) {
    equivalent = "2.75";
  } else if (grade >= 75) {
    equivalent = "3.0";
  } else {
    equivalent = "5.0";
  }

  return equivalent;
}

// Function getAcademicLeader() - Determines Academic Leader classification
// Uses switch statement to check equivalent value
// Equivalents of 1.0 and 1.25 are 1st Class, 1.5 is 2nd Class, 1.75 is 3rd Class
// All other equivalents are marked with "-" because they do not qualify
function getAcademicLeader(equivalent) {
  let leader = "";

  switch (equivalent) {
    case "1.0":
    case "1.25":
      leader = "1st Class Academic Leader";
      break;
    case "1.5":
      leader = "2nd Class Academic Leader";
      break;
    case "1.75":
      leader = "3rd Class Academic Leader";
      break;
    default:
      leader = "-";
      break;
  }

  return leader;
}

