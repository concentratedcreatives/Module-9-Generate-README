// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a brief description of your project.' },
    { type: 'input', name: 'installation', message: 'Share instructions for installing your project.' },
    { type: 'input', name: 'usage', message: 'How should users utilize your project?' },
    { type: 'input', name: 'contribution', message: 'Specify guidelines for contributions to your project.' },
    { type: 'input', name: 'test', message: 'Offer instructions for testing your project.' },
    { type: 'list', name: 'license', message: 'Select a license for your project.', choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'] },
    { type: 'input', name: 'github', message: 'Enter your GitHub username.' },
    { type: 'input', name: 'email', message: 'Provide your email address for inquiries.' },
    { type: 'input', name: 'questions', message: 'How can users reach out with additional questions?' },
  ];
  
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => require('fs').writeFile(fileName, data, (err) => (err ? console.error(err) : console.log('Saved File')));

// TODO: Create a function to initialize app
const init = () => inquirer.prompt(questions)
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('generatedREADME.md', readmeContent);
  });

init();