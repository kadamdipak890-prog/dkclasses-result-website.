const data = [
  {
    class: "12",
    exams: [
      {
        name: "Chachani Exam",
        date: "2025-09-10",
        students: [
          {roll:1,name:"Aditya Patil",gender:"M",marks:88,max:100,percentage:88,rank:5},
          {roll:2,name:"Ananya Deshmukh",gender:"F",marks:92,max:100,percentage:92,rank:2},
          {roll:3,name:"Rohit Kadam",gender:"M",marks:75,max:100,percentage:75,rank:15},
          {roll:4,name:"Shruti More",gender:"F",marks:81,max:100,percentage:81,rank:10},
          {roll:5,name:"Tejas Kulkarni",gender:"M",marks:69,max:100,percentage:69,rank:22},
          {roll:6,name:"Priya Shinde",gender:"F",marks:95,max:100,percentage:95,rank:1},
          {roll:7,name:"Akash Pawar",gender:"M",marks:78,max:100,percentage:78,rank:13},
          {roll:8,name:"Divya Jadhav",gender:"F",marks:85,max:100,percentage:85,rank:7},
          {roll:9,name:"Sameer Naik",gender:"M",marks:72,max:100,percentage:72,rank:18},
          {roll:10,name:"Kavya Raut",gender:"F",marks:80,max:100,percentage:80,rank:11},
          {roll:11,name:"Manish Bhosale",gender:"M",marks:66,max:100,percentage:66,rank:25},
          {roll:12,name:"Sonal Gokhale",gender:"F",marks:90,max:100,percentage:90,rank:4},
          {roll:13,name:"Varun Desai",gender:"M",marks:77,max:100,percentage:77,rank:14},
          {roll:14,name:"Riya Mehta",gender:"F",marks:84,max:100,percentage:84,rank:8},
          {roll:15,name:"Ankit Sharma",gender:"M",marks:70,max:100,percentage:70,rank:20},
          {roll:16,name:"Nikita Kulkarni",gender:"F",marks:68,max:100,percentage:68,rank:23},
          {roll:17,name:"Rahul Patil",gender:"M",marks:76,max:100,percentage:76,rank:16},
          {roll:18,name:"Neha Chavan",gender:"F",marks:89,max:100,percentage:89,rank:6},
          {roll:19,name:"Siddharth Jadhav",gender:"M",marks:82,max:100,percentage:82,rank:9},
          {roll:20,name:"Shreya More",gender:"F",marks:74,max:100,percentage:74,rank:17},
          {roll:21,name:"Harsh Gawande",gender:"M",marks:65,max:100,percentage:65,rank:26},
          {roll:22,name:"Pallavi Rane",gender:"F",marks:79,max:100,percentage:79,rank:12},
          {roll:23,name:"Mayur Deshmukh",gender:"M",marks:71,max:100,percentage:71,rank:19},
          {roll:24,name:"Komal Patil",gender:"F",marks:87,max:100,percentage:87,rank:5},
          {roll:25,name:"Suraj Pawar",gender:"M",marks:73,max:100,percentage:73,rank:18},
          {roll:26,name:"Anjali Jadhav",gender:"F",marks:91,max:100,percentage:91,rank:3},
          {roll:27,name:"Vivek Kulkarni",gender:"M",marks:67,max:100,percentage:67,rank:24},
          {roll:28,name:"Isha More",gender:"F",marks:83,max:100,percentage:83,rank:8},
          {roll:29,name:"Rajesh Sharma",gender:"M",marks:64,max:100,percentage:64,rank:27},
          {roll:30,name:"Simran Raut",gender:"F",marks:86,max:100,percentage:86,rank:6},
          {roll:31,name:"Abhishek Desai",gender:"M",marks:80,max:100,percentage:80,rank:11},
          {roll:32,name:"Shikha Patil",gender:"F",marks:75,max:100,percentage:75,rank:15},
          {roll:33,name:"Nikhil Mehta",gender:"M",marks:78,max:100,percentage:78,rank:13},
          {roll:34,name:"Aarti Sharma",gender:"F",marks:69,max:100,percentage:69,rank:22},
          {roll:35,name:"Ramesh Pawar",gender:"M",marks:92,max:100,percentage:92,rank:2},
          {roll:36,name:"Deepa Chavan",gender:"F",marks:88,max:100,percentage:88,rank:5},
          {roll:37,name:"Sachin Kadam",gender:"M",marks:70,max:100,percentage:70,rank:20},
          {roll:38,name:"Rekha More",gender:"F",marks:81,max:100,percentage:81,rank:10},
          {roll:39,name:"Ajay Patil",gender:"M",marks:77,max:100,percentage:77,rank:14},
          {roll:40,name:"Swati Deshmukh",gender:"F",marks:95,max:100,percentage:95,rank:1}
        ]
      },
      {
        name: "Saha-Mahi Exam",
        date: "2025-09-12",
        students: [
          {roll:1,name:"Aditya Patil",gender:"M",marks:90,max:100,percentage:90,rank:4},
          {roll:2,name:"Ananya Deshmukh",gender:"F",marks:88,max:100,percentage:88,rank:5},
          {roll:3,name:"Rohit Kadam",gender:"M",marks:78,max:100,percentage:78,rank:13},
          {roll:4,name:"Shruti More",gender:"F",marks:84,max:100,percentage:84,rank:8},
          {roll:5,name:"Tejas Kulkarni",gender:"M",marks:70,max:100,percentage:70,rank:20},
          {roll:6,name:"Priya Shinde",gender:"F",marks:97,max:100,percentage:97,rank:1},
          {roll:7,name:"Akash Pawar",gender:"M",marks:80,max:100,percentage:80,rank:11},
          {roll:8,name:"Divya Jadhav",gender:"F",marks:87,max:100,percentage:87,rank:6},
          {roll:9,name:"Sameer Naik",gender:"M",marks:74,max:100,percentage:74,rank:17},
          {roll:10,name:"Kavya Raut",gender:"F",marks:82,max:100,percentage:82,rank:9},
          // ... बाकी 30 विद्यार्थी समान structure
        ]
      }
    ]
  }
];

// --- Populate class select ---
const classSelect = document.getElementById("classSelect");
data.forEach(d => {
  const option = document.createElement("option");
  option.value = d.class;
  option.textContent = d.class;
  classSelect.appendChild(option);
});

const examSelect = document.getElementById("examSelect");
const container = document.getElementById("resultsContainer");

// --- On class change ---
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

// --- On exam change ---
examSelect.addEventListener("change", () => {
  container.innerHTML = "";
  const selectedClass = classSelect.value;
  const selectedExam = examSelect.value;
  if (!selectedClass || !selectedExam) return;

  const classData = data.find(d => d.class === selectedClass);
  const examData = classData.exams.find(e => e.name === selectedExam);

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
  examData.students.forEach(student => {
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
});