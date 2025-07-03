document.getElementById("gradeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let chemistry = parseFloat(document.getElementById("chemistry").value);
    let hindi = parseFloat(document.getElementById("hindi").value);
    let math = parseFloat(document.getElementById("math").value);
    let english = parseFloat(document.getElementById("english").value);
    let physics = parseFloat(document.getElementById("physics").value);

    let marks = [chemistry, hindi, math, english, physics];

    // Check for invalid inputs
    if (marks.some(mark => isNaN(mark) || mark < 0 || mark > 100)) {
        alert("❌ Please enter valid marks between 0 and 100 for all subjects.");
        return;
    }

    let total = marks.reduce((acc, val) => acc + val, 0);
    let percentage = (total / 500) * 100;

    let grade = "";
    let message = "";

    if (percentage >= 90) {
        grade = "A+";
        message = "🎉 Congratulations! You passed with flying colors!";
    } else if (percentage >= 80) {
        grade = "A";
        message = "🎉 Great job! You passed!";
    } else if (percentage >= 70) {
        grade = "B";
        message = "🎉 Good effort! You passed!";
    } else if (percentage >= 60) {
        grade = "C";
        message = "🎉 You passed!";
    } else if (percentage >= 50) {
        grade = "D";
        message = "🎉 Just made it! You passed!";
    } else {
        grade = "F";
        message = `❌ You failed (Below 50%). But don't worry —  You can do better next time! 💪`;
    }

    document.getElementById("result").innerHTML = `
    <h3>📊 Results:</h3>
    <p><strong>Total Marks:</strong> ${total} / 500</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});