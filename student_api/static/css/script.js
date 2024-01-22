// static/script.js
// document.addEventListener('DOMContentLoaded', function() {
//     fetchData();
// });

// function fetchData() {
//     fetch('http://127.0.0.1:8000/api/students/?format=json')
//         .then(response => response.json())
//         .then(data => {
//             displayData(data.results);
//             console.log(data)
            
//         })
//         .catch(error => console.error('Error:', error));
// }

// function displayData(students) {
//     const tableBody = document.getElementById('tableBody');
//     tableBody.innerHTML = '';

//     students.forEach(student => {
//         const row = tableBody.insertRow();
//         row.insertCell(0).textContent = student.id;
//         row.insertCell(1).textContent = student.name;
//         row.insertCell(2).textContent = student.total_marks;
//     });
// }


// static/script.js
document.addEventListener('DOMContentLoaded', function() {
    fetchData();
    setupPagination();
    setupFiltering();
});

function fetchData(page = 1, filters = {}) {
    const url = `http://127.0.0.1:8000/api/students/?page=${page}&name=${filters.name || ''}&total_marks=${filters.total_marks || ''}`;

    fetch(url)
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

function setupPagination() {
    const nextPageBtn = document.getElementById('nextPageBtn');
    const prevPageBtn = document.getElementById('prevPageBtn');

    nextPageBtn.addEventListener('click', function() {
        const currentPage = parseInt(nextPageBtn.dataset.page, 10);
        fetchData(currentPage + 1);
    });

    prevPageBtn.addEventListener('click', function() {
        const currentPage = parseInt(prevPageBtn.dataset.page, 10);
        fetchData(currentPage - 1);
    });
}

function setupFiltering() {
    const filterForm = document.getElementById('filterForm');

    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('filterName').value;
        const totalMarks = document.getElementById('filterTotalMarks').value;

        fetchData(1, { name, total_marks: totalMarks });
    });
}
