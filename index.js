// const path = require('path');
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(port, () => {
//     console.log(`Web service listening at http://localhost:${port}`);
// });
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample data (replace with actual data)
let personalInfo = {
    name: "Alice Optina",
    birthDate: "1998-06-21",
    gender: "Female",
    contactNo: "09951405048",
    address: "Mabolo Cebu City"
};

let skills = [
    { description: "Web Development", expertiseLevel: "Advanced" },
    { description: "Data Analysis", expertiseLevel: "Intermediate" }
];

let workExperience = [
    { companyName: "Wa El Company", designation: "Tig hakot tubig", details: "Developed web applications", year: "2018-2020" }
];

let education = [
    { school: "University of Southern Philippines Foundation", year: "present" }
];

let personalReferences = [
    { name: "Jane ", relationship: "Colleague", contactNumber: "987-654-3210" }
];

app.use(bodyParser.json());

// Endpoint for personal information
app.get('/personal-info', (req, res) => {
    res.json(personalInfo);
});

// Endpoint for skills
app.get('/skills', (req, res) => {
    res.json(skills);
});

// Endpoint for work experience
app.get('/work-experience', (req, res) => {
    res.json(workExperience);
});

// Endpoint for education
app.get('/education', (req, res) => {
    res.json(education);
});

// Endpoint for personal references
app.get('/personal-references', (req, res) => {
    res.json(personalReferences);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Web service listening at http://localhost:${port}`);
});

