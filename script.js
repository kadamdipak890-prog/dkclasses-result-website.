// Student data
const students = [
  { roll: 101, name: "Sakshi Kadam", class: "9", marks: 20 },
  { roll: 102, name: "Dipak Kadam", class: "9", marks: 30 },
  { roll: 103, name: "Karishma Harale", class: "9", marks: 21 },
  { roll: 104, name: "Om Kadam", class: "9", marks: 19 },
  { roll: 105, name: "Vijay Kadam", class: "9", marks: 17 },
  { roll: 106, name: "Sandip Pote", class: "9", marks: 7 }
];

// Calculate percentage and rank
students.forEach(s => {
  s.percentage = ((s.marks / 50) * 100).toFixed(2) + "%"; // total = 50
});
students.sort((a, b) => b.marks - a.marks);
students.forEach((s, i) => s.rank = i + 1);

// Functions for buttons
function showSearch() {
  document.getElementById("searchBox").style.display = "block";
  document.getElementById("allStudents").style.display = "none";
  document.getElementById("result").innerHTML = "";
}

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
      <td>${s.class}</td>
      <td>${s.marks}</td>
      <td>${s.percentage}</td>
      <td>${s.rank}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function searchResult() {
  const rollNo = document.getElementById("searchRoll").value;
  const student = students.find(s => s.roll == rollNo);

  const resultDiv = document.getElementById("result");
  if (student) {
    resultDiv.innerHTML = `
      <h3>Result for Roll No: ${student.roll}</h3>
      <p><b>Name:</b> ${student.name}</p>
      <p><b>Class:</b> ${student.class}</p>
      <p><b>Marks:</b> ${student.marks}</p>
      <p><b>Percentage:</b> ${student.percentage}</p>
      <p><b>Rank:</b> ${student.rank}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">No record found</p>`;
  }
}