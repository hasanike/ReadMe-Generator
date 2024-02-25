// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


const questions = ["What is the title of your webpage?", "Can you describe your webpage?", "What are the installation instructions?", "How do you use the webpage?", "what license did you use? "];

inquirer.prompt (
    [
        {
            type: 'input',
            message: questions[0],
            name: 'title',
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        }

        { 
            type: 'input',
            message: questions[1],
            name: 'description',
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        }

        {
            type: 'input',
            message: questions[2],
            name: 'instructions',
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        }
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        }
        {
            type: 'list',
            message: questions[4],
            name: "installation",
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        }
    ]

)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
