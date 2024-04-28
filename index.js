//const path = require('path');
const cors = require('cors'); // Import the cors middleware
const express = require('express');
const app = express();
const port = 3000;

// Set the folder where static files are located
//app.use(express.static(path.join(__dirname, 'public')));

// Use CORS with default settings to allow cross-origin requests
app.use(cors({origin: 'https://alice-portfolio.onrender.com' }));

// Sample data (replace with actual data)
let personalInfo = [{
    name: "Alice Optina",
    birthDate: "1998-06-21",
    gender: "Female",
    contactNo: "09951405048",
    address: "Mabolo Cebu City",
    objective: "To be able chuchu",
    personalImg: "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg",
    objectiveIcon: "https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-128.png",
    phoneIcon: "http://icons.iconarchive.com/icons/icons8/android/512/Mobile-Phone-2-icon.png",
    emailIcon: "http://static.wixstatic.com/media/d822a6_af29afe70e1a4e9891f94a627914b6ec.png"
}];

let skills = [
    { description: "Web Development", expertiseLevel: "Advanced" },
    { description: "Data Analysis", expertiseLevel: "Intermediate" }
];

let workExperience = [
    { companyName: "Wa El Company", designation: "Tig hakot tubig", details: "Developed web applications", year: "2018-2020" }
];

let education = [
    { school: "uspf", year: "2011", address: "Bohol" },
    { school: "Immaculata", year: "2015", address: "Bohol" },
    { school: "University of Southern Philippines Foundation", year: "present", address: "Cebu" }
];

let personalReferences = [
    { name: "Jane ", relationship: "Colleague", contactNumber: "987-654-3210" }
];

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

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(port, () => {
    console.log(`Web service listening at http://localhost:${3000}`);
});

