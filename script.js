const students = [
  { name: "उदय खंडू पगार", division: "अ", roll: 7, marks: 12 },
  { name: "कृष्णा अनिल कदम", division: "अ", roll: 1, marks: 8 },
  { name: "श्रावणी भागवत कदम", division: "अ", roll: 24, marks: 7 },
  { name: "गौरव संपत कदम", division: "ब", roll: 28, marks: 7 },
  { name: "समृद्धि माधव रायते", division: "अ", roll: 30, marks: 14 },
  { name: "प्रगती पुरुषोत्तम ढगे", division: "ब", roll: 13, marks: 8 },
  { name: "प्रणय राजेंद्र मोगल", division: "ब", roll: 24, marks: 6 },
  { name: "साक्षी सोमनाथ थोरात", division: "ब", roll: 3, marks: 20 },
  { name: "प्रिया भारत पिंपरकर", division: "ब", roll: 10, marks: 11 },
  { name: "सोहम सूर्यभान कदम", division: "ब", roll: 22, marks: 12 },
  { name: "तनुजा शंकर कुंदे", division: "ब", roll: 12, marks: 20 },
  { name: "माधुरी नवनाथ कदम", division: "ब", roll: 7, marks: 16 },
  { name: "सार्थक विष्णु कदम", division: "अ", roll: 10, marks: 1 },
  { name: "ऋतुजा भाऊसाहेब बोराडे", division: "अ", roll: 25, marks: 18 },
  { name: "सार्थक गणेश गोसावी", division: "ब", roll: 34, marks: 7 },
  { name: "हंसराज अनिल शिंदे", division: "अ", roll: 13, marks: 4 },
  { name: "गौरी गोरख कदम", division: "ब", roll: 4, marks: 20 },
  { name: "रुद्र प्रशांत कदम", division: "ब", roll: 29, marks: 10 },
  { name: "वैष्णवी नवनाथ गोसावी", division: "ब", roll: 16, marks: 18 },
  { name: "सृष्टी उत्तम कुंदे", division: "ब", roll: 1, marks: 18 },
  { name: "विवेक पुंडलिक कदम", division: "ब", roll: 19, marks: 20 },
  { name: "विशाल अण्णासाहेब घनघाव", division: "ब", roll: 21, marks: 12 },
  { name: "कृष्णा बाबासाहेब कदम", division: "ब", roll: 26, marks: 13 },
  { name: "सार्थक बाळासाहेब घनघाव", division: "अ", roll: 5, marks: 12 },
  { name: "संकेत एकनाथ कदम", division: "ब", roll: 33, marks: 12 },
  { name: "श्रद्धा शरद कदम", division: "ब", roll: 11, marks: 20 },
  { name: "सिद्धी रामदास गाढे", division: "ब", roll: 9, marks: 20 },
  { name: "प्रांजल गणेश कदम", division: "ब", roll: 6, marks: 20 },
  { name: "साईनाथ गोरख घनघाव", division: "अ", roll: 12, marks: 20 },
  { name: "उमेश पंढरीनाथ कदम", division: "ब", roll: 31, marks: 15 },
  { name: "हरीश्चंद्र बाळासाहेब कदम", division: "अ", roll: 4, marks: 7 },
  { name: "गायत्री तान्हाजी कदम", division: "अ", roll: 28, marks: 15 },
  { name: "साई गोपीनाथ थोरात", division: "ब", roll: 25, marks: 20 },
  { name: "श्रेयस नारायण पडोळ", division: "अ", roll: 11, marks: 5 },
  { name: "हर्षद समाधान कदम", division: "ब", roll: 32, marks: 20 }
];

function enableDivision() {
  document.getElementById("divisionSelect").disabled = false;
}

function enableOption() {
  document.getElementById("resultType").disabled = false;
}

function showInput() {
  const type = document.getElementById("resultType").value;
  document.getElementById("rollInput").style.display = type === "self" ? "block" : "none";
  if (type === "all") showResult();
}

function showResult() {
  const cls = document.getElementById("classSelect").value;
  const div = document.getElementById("divisionSelect").value;
  const type = document.getElementById("resultType").value;
  const roll = document.getElementById("rollNumber").value;
  let resultDiv = document.getElementById("result");
  let filtered = students.filter(s => s.division === div);

  if (type === "self") {
    let student = filtered.find(s => s.roll == roll);
    if (!student) {
      resultDiv.innerHTML = "<p>❌ विद्यार्थी सापडला नाही.</p>";
      return;
    }
    let percent = ((student.marks / 20) * 100).toFixed(2);
    let color = percent >= 75 ? "green" : percent >= 40 ? "orange" : "red";
    resultDiv.innerHTML = `
      <table>
        <tr><th>रोल नंबर</th><th>नाव</th><th>गुण (20 पैकी)</th><th>टक्केवारी</th></tr>
        <tr>
          <td>${student.roll}</td>
          <td>${student.name}</td>
          <td>${student.marks}</td>
          <td style="color:${color}; font-weight:bold;">${percent}%</td>
        </tr>
      </table>
      <div id="note"><p>✔️ DK Classes - Hard Work Always Pays 💯</p></div>
    `;
  } else if (type === "all") {
    let rows = "";
    filtered.forEach(s => {
      let percent = ((s.marks / 20) * 100).toFixed(2);
      let color = percent >= 75 ? "green" : percent >= 40 ? "orange" : "red";
      rows += `<tr>
        <td>${s.roll}</td>
        <td>${s.name}</td>
        <td>${s.marks}</td>
        <td style="color:${color}; font-weight:bold;">${percent}%</td>
      </tr>`;
    });
    resultDiv.innerHTML = `
      <table>
        <tr><th>रोल नंबर</th><th>नाव</th><th>गुण (20 पैकी)</th><th>टक्केवारी</th></tr>
        ${rows}
      </table>
      <div id="note"><p>✔️ DK Classes - Hard Work Always Pays 💯</p></div>
    `;
  }
}