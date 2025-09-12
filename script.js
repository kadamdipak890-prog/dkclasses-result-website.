// ---------------- Data for Class 9 to 12 ----------------
const data = [
  {
    class: "9",
    exams: [
      {
        name: "Chachani Exam",
        date: "2025-09-10",
        students: [
          {roll:1,name:"Aarav Patil",gender:"M",marks:78,max:100,percentage:78,rank:5},
          {roll:2,name:"Anaya Deshmukh",gender:"F",marks:82,max:100,percentage:82,rank:3},
          {roll:3,name:"Rohan Kadam",gender:"M",marks:70,max:100,percentage:70,rank:7},
          {roll:4,name:"Shruti More",gender:"F",marks:85,max:100,percentage:85,rank:2},
          {roll:5,name:"Tejas Kulkarni",gender:"M",marks:65,max:100,percentage:65,rank:9},
          {roll:6,name:"Priya Shinde",gender:"F",marks:90,max:100,percentage:90,rank:1},
          {roll:7,name:"Akash Pawar",gender:"M",marks:72,max:100,percentage:72,rank:6},
          {roll:8,name:"Divya Jadhav",gender:"F",marks:80,max:100,percentage:80,rank:4},
          {roll:9,name:"Sameer Naik",gender:"M",marks:68,max:100,percentage:68,rank:8},
          {roll:10,name:"Kavya Raut",gender:"F",marks:75,max:100,percentage:75,rank:5}
        ]
      }
    ]
  },
  {
    class: "10",
    exams: [
      {
        name: "Chachani Exam",
        date: "2025-09-11",
        students: [
          {roll:1,name:"Aditya Patil",gender:"M",marks:88,max:100,percentage:88,rank:4},
          {roll:2,name:"Ananya Deshmukh",gender:"F",marks:92,max:100,percentage:92,rank:1},
          {roll:3,name:"Rohit Kadam",gender:"M",marks:75,max:100,percentage:75,rank:7},
          {roll:4,name:"Shruti More",gender:"F",marks:81,max:100,percentage:81,rank:6},
          {roll:5,name:"Tejas Kulkarni",gender:"M",marks:69,max:100,percentage:69,rank:10},
          {roll:6,name:"Priya Shinde",gender:"F",marks:95,max:100,percentage:95,rank:2},
          {roll:7,name:"Akash Pawar",gender:"M",marks:78,max:100,percentage:78,rank:5},
          {roll:8,name:"Divya Jadhav",gender:"F",marks:85,max:100,percentage:85,rank:3},
          {roll:9,name:"Sameer Naik",gender:"M",marks:72,max:100,percentage:72,rank:9},
          {roll:10,name:"Kavya Raut",gender:"F",marks:80,max:100,percentage:80,rank:6}
        ]
      }
    ]
  },
  {
    class: "11",
    exams: [
      {
        name: "Chachani Exam",
        date: "2025-09-12",
        students: [
          {roll:1,name:"Aditya Patil",gender:"M",marks:88,max:100,percentage:88,rank:5},
          {roll:2,name:"Ananya Deshmukh",gender:"F",marks:92,max:100,percentage:92,rank:2},
          {roll:3,name:"Rohit Kadam",gender:"M",marks:75,max:100,percentage:75,rank:15},
          {roll:4,name:"Shruti More",gender:"F",marks:81,max:100,percentage:81,rank:10}
        ]
      }
    ]
  },
  {
    class: "12",
    exams: [
      {
        name: "Chachani Exam",
        date: "2025-09-10",
        students: [
          {roll:1,name:"Aditya Patil",gender:"M",marks:88,max:100,percentage:88,rank:5},
          {roll:2,name:"Ananya Deshmukh",gender:"F",marks:92,max:100,percentage:92,rank:2}
        ]
      },
      {
        name: "Saha-Mahi Exam",
        date: "2025-09-12",
        students: [
          {roll:1,name:"Aditya Patil",gender:"M",marks:90,max:100,percentage:90,rank:4},
          {roll:2,name:"Ananya Deshmukh",gender:"F",marks:88,max:100,percentage:88,rank:5}
        ]
      }
    ]
  }
];

// ---------------- Populate Class Dropdown ----------------
const classSelect = document.getElementById("classSelect");
const examSelect = document.getElementById("examSelect");
const container = document.getElementById("resultsContainer");

data.forEach(d => {
  const option = document.createElement("option");
  option.value = d.class;
  option.textContent = d.class;
  classSelect.appendChild(option);
});

// ---------------- On Class Change ----------------
classSelect.addEventListener("change", () => {
  examSelect.innerHTML = '<option value="">--Select Exam--</option>';
  container.innerHTML = "";
  const selectedClass = classSelect.value;
  if (!selectedClass) return;

  const classData = data.find(d => d.class === selectedClass);
  classData.exams.forEach(exam => {
    const option = document.createElement("option");
    option.value = exam.name;
    option.textContent = `${exam.name} (${exam.date})`;
    examSelect.appendChild(option);
  });
});

// ---------------- On Exam Change ----------------
examSelect.addEventListener("change", () => {
  displayResults();
});

// ---------------- Search Button ----------------
document.getElementById("searchButton").addEventListener("click", () => {
  displayResults(document.getElementById("searchInput").value.trim().toLowerCase());
});

// ---------------- Display Results ----------------
function displayResults(query="") {
  container.innerHTML = "";
  const selectedClass = classSelect.value;
  const selectedExam = examSelect.value;
  if (!selectedClass || !selectedExam) return;

  const classData = data.find(d => d.class === selectedClass);
  const examData = classData.exams.find(e => e.name === selectedExam);

  let students = examData.students;
  if (query) {
    students = students.filter(s => s.name.toLowerCase().includes(query) || s.roll.toString() === query);
    if (students.length === 0) {
      container.innerHTML = `<p>No student found with Roll No or Name "${query}"</p>`;
      return;
    }
  }

  const section = document.createElement("div");
  section.className = "exam-section";

  const header = document.createElement("div");
  header.className = "exam-header";
  header.innerHTML = `<strong>Class:</strong> ${selectedClass} | <strong>Exam:</strong> ${examData.name} | <strong>Date:</strong> ${examData.date}`;
  section.appendChild(header);

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Roll No</th>
      <th>Name</th>
      <th>Gender</th>
      <th>Marks Obtained</th>
      <th>Maximum Marks</th>
      <th>Percentage</th>
      <th>Rank</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  students.forEach(student => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${student.roll}</td>
      <td>${student.name}</td>
      <td>${student.gender}</td>
      <td>${student.marks}</td>
      <td>${student.max}</td>
      <td>${student.percentage}</td>
      <td>${student.rank}</td>
    `;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  section.appendChild(table);
  container.appendChild(section);
}