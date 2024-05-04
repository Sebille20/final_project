//const path = require('path');
const cors = require('cors'); // Import the cors middleware
const express = require('express');
const app = express();
const port = 3000;

// Set the folder where static files are located
//app.use(express.static(path.join(__dirname, 'public')));

// Use CORS with default settings to allow cross-origin requests
app.use(cors());


let resumeData = {
  personalInfo: {
    name: "Ma. Alice Gay O. Optina",
    birthDate: "June 21",
    contactNo: "09951405048",
    address: "Mabolo Cebu City",
    objective: "I am an enthusiastic and dedicated 2nd-year BSIT student with a commitment to pursuing excellence in the field of Information Technology.",
    email: "alice.optina20@gmail.com",
    personalImg: "alice.jpg",
    objectiveIcon: "https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-128.png",
    phoneIcon: "http://icons.iconarchive.com/icons/icons8/android/512/Mobile-Phone-2-icon.png",
    emailIcon: "http://static.wixstatic.com/media/d822a6_af29afe70e1a4e9891f94a627914b6ec.png",
    homeIcon: "https://icons.iconarchive.com/icons/rafiqul-hassan/blogger/512/Home-icon.png",
  },
  skills: [
    { description: "Web Development", expertiseLevel: "Advanced" },
    { description: "Data Analysis", expertiseLevel: "Intermediate" },
  ],
  workExperience: [
    { companyName: "Wa El Company", designation: "Tig hakot tubig", details: "Developed web applications", year: "2018-2020" },
  ],
  education: [
    { school: "University of Southern Philippines Foundation ", year: "Present", address: "Lahug Cebu City" },
    { school: "Immaculata High School", year: "2015", address: "Baclayon Bohol" },
    { school: "Baclayon Central Elementary School", year: "2010-2011", address: "Baclayon Bohol" },
  ],
  personalReferences: [
    { name: "Jane", relationship: "Colleague", contactNumber: "0999999999" },
  ],
};

// Endpoint for personal information
app.get('/resume-data', (req, res) => {
    res.json(resumeData);
});

app.listen(port, () => {
    console.log(`Web service listening at http://localhost:${3000}`);
});

