document.addEventListener('DOMContentLoaded', function () {
    fetch('/personal-info')
        .then(response => response.json())
        .then(data => {
            // Update personal info section
            document.getElementById('personal-info').innerHTML = `
            <h2>Personal Information</h2>
            <p>Name: ${data.name}</p>
            <p>Birth Date: ${data.birthDate}</p>
            <p>Gender: ${data.gender}</p>
            <p>Contact No: ${data.contactNo}</p>
            <p>Address: ${data.address}</p>
        `;
        });

    // Similar fetch calls for other sections (skills, work experience, education, personal references)
});