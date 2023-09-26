// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide a project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project? (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please provide a project description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?  (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide the installation process for your repository.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What are the operating instructions for your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions for using your project.');
                return false;
            }
        }
    },


    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project? (Required)',
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log('Please provide contributors.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What is the process used to test this application? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide instructions for testing your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please provide relative path to screenshot image. (Required)',
        validate: ssInput => {
            if (ssInput) {
                return true;
            } else {
                console.log('Please provide path to screenshot image.');
                return false;
            }
        }
    },
    { 
    type: "list",
    message: "what license are you using? ",
    name: "license",
    choices: ["AAL", "ISC", "MIT", "NTP", "W3C"]
    
    },
    
    {
        type: 'input',
        name: 'contact',
        message: 'What is your email address? (Required)',
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('Please provide your email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your github username? (Required)',
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('Please provide your github username.');
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function init() {
    inquirer.prompt(questions).then(function(userInput) {
const markdownString = generateMarkdown(userInput)

fs.writeFile('README.md', markdownString, function(err) {
    if(err) {
        console.log(err)
    }
    else {
        console.log('Your ReadMe file has been created!')
    }
})
    },
    )}


// TODO: Create a function to initialize app
// function init() {

//     inquirer.prompt(questions).then(function(userInput) {
        
//         const markdownString = generateMarkdown(userInput)
// }
// )}

// function init() {
//     return inquirer.prompt(questions);
// };

// }
// Function call to initialize app
init();
