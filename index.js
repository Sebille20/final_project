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
    firstname: "Ma. Alice Gay ",
    lastname: "Optina",
    birthDate: "June 21",
    contactNo: "09951405048",
    address: "Mabolo Cebu City",
    objective: "I am an enthusiastic and dedicated 2nd-year BSIT student with a commitment to pursuing excellence in the field of Information Technology.",
    email: "alice.optina20@gmail.com",
    personalImg: "alice2.jpg",
    markerIcon: "https://i.postimg.cc/VL1v2bLL/icon-marker.png",
    phoneIcon: "https://i.postimg.cc/fRC98fcN/icon-phone.png",
    emailIcon: "https://i.postimg.cc/g0GxRXQT/icon-email.png",
  },
  skills: [
    { description: "Teamwork" },
    { description: "Collaboration"  },
    { description: "Adaptability"  },
  ],
  education: [
    { school: "University of Southern Philippines Foundation ", year: "Present", address: "Lahug Cebu City" },
    { school: "Immaculata High School", year: "2014-2015", address: "Baclayon Bohol" },
    { school: "Baclayon Central Elementary School", year: "2010-2011", address: "Baclayon Bohol" },
  ],
  personalReferences: [
    { name: "Jane Chu", relationship: "Colleague", contactNumber: "0999999999" },
    { name: "Kristine", relationship: "Colleague", contactNumber: "0999999999" },
  ],
  language: [
    { languagename: "Tagalog" },{ languagename: "English" }
  ],

  achievements: [
    { name: "Dean's Lister", year: "2022-2023",semester:"1st and 2nd semester"},
  ],

};

// Endpoint for personal information
app.get('/resume-data', (req, res) => {
    res.json(resumeData);
});

app.listen(port, () => {
    console.log(`Web service listening at http://localhost:${3000}`);
});

