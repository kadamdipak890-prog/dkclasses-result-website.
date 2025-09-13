// Generate 20 students
let students = [];
for (let i = 1; i <= 20; i++) {
  let roll = 100 + i;
  let name = "Student " + i;
  let gender = (i % 2 === 0) ? "Male" : "Female"; // alternate
  let marks = Math.floor(Math.random() * 51); // 0–50 marks
  students.push({ roll, name, gender, class: "9", marks });
}

// Calculate percentage
students.forEach(s => {
  s.percentage = ((s.marks / 50) * 100).toFixed(2) + "%";
});

// Sort by marks → rank
students.sort((a, b) => b.marks - a.marks);
students.forEach((s, i) => s.rank = i + 1);

// Percentile
const N = students.length;
students.forEach(s => {
  s.percentile = (((N - s.rank) / N) * 100).toFixed(2) + "%";
});

// Show all students
function showAll() {
  document.getElementById("searchBox").style.display = "none";
  document.getElementById("allStudents").style.display = "block";
  document.getElementById("result").innerHTML = "";

  const tbody = document.querySelector("#resultTable tbody");
  tbody.innerHTML = "";
  students.forEach(s => {
    const row = `<tr>
      <td>${s.roll}</td>
      <td>${s.name}</td>
      <td>${s.gender}</td>
      <td>${s.class}</td>
      <td>${s.marks}</td>
      <td>${s.percentage}</td>
      <td>${s.percentile}</td>
      <td>${s.rank}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

// Show search box
function showSearch() {
  document.getElementById("searchBox").style.display = "block";
  document.getElementById("allStudents").style.display = "none";
  document.getElementById("result").innerHTML = "";
}

// Search by roll number
function searchResult() {
  const rollNo = document.getElementById("searchRoll").value;
  const student = students.find(s => s.roll == rollNo);

  const resultDiv = document.getElementById("result");
  if (student) {
    resultDiv.innerHTML = `
      <h3>Result for Roll No: ${student.roll}</h3>
      <p><b>Name:</b> ${student.name}</p>
      <p><b>Gender:</b> ${student.gender}</p>
      <p><b>Class:</b> ${student.class}</p>
      <p><b>Marks:</b> ${student.marks}</p>
      <p><b>Percentage:</b> ${student.percentage}</p>
      <p><b>Percentile:</b> ${student.percentile}</p>
      <p><b>Rank:</b> ${student.rank}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">No record found</p>`;
  }
}