// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// an array for user Input
const questions = ["What is the title of your webpage?", "Can you describe your webpage?", "What are the installation instructions?", "How do you use the webpage?", "Who should be credited for working on the webpage?", "Did you run tests?", "Do you have a license?","What is your Github?", "What is your email?"];


// function to write README file
function writeToFile(fileName, data) { 
    const info = generator(data);
    fs.writeFile(fileName, info , (err) =>
        err ? console.error(err) : console.log('Success!')
        );

}
//  function to initialize app
function init() {
inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        },

        { 
            type: 'input',
            message: questions[1],
            name: 'description',
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        },

        {
            type: 'input',
            message: questions[2],
            name: 'instructions',
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        },
        {
            type: 'input',
            message: questions[4],
            name: "contributions",
            validate: (value) => {if(value){return true} else {return "I need a value to continue"}}
        },
        {
            type: 'input',
            message: questions[5],
            name: "tests",

        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: ["MIT", "ISC", "GPLv3", "None"],
        },

        {   type: 'list',
            message: questions[7],
            name: 'github',
        },
        {   
            type: 'list',
            message: questions[8],
            name: 'email',
            
        },
    ])
    .then((response) => {
        
        writeToFile('sampleReadMe.md', response);
    });
}

// Function call to initialize app
init();
