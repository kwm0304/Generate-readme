// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genReadMe = ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the name of your repository?',
            name: 'repo'
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'project'
        },
        {
            type: 'input',
            message: 'Describe your project:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Installation instructions:',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Intended usage for project:',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Contribution suggestions:',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Test instructions:',
            name: 'test'
        },
        {
            type: 'checkbox',
            message: 'Choose a license for your project',
            name: 'license',
            choices: ['none', 'Apache', 'GPLv3', 'GPLv2', 'BSD3', 'BSD2']
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, (err) => {
        if (err)
        console.log(err);
        else {
            console.log('README successfully generated.')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    questions().then(answers => {
        return genReadMe(answers)
    })
    .then(data => {
        return writeToFile(data)
    })
}

// Function call to initialize app
init();