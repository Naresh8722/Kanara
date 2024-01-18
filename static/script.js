// static/script.js
document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});

function fetchData() {
    fetch('http://127.0.0.1:8000/api/students/')
        .then(response => response.json())
        .then(data => {
            displayData(data.results);
        })
        .catch(error => console.error('Error:', error));
}

function displayData(students) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    students.forEach(student => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = student.id;
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.total_marks;
    });
}
