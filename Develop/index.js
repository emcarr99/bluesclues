// inquirer package
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// validate is used to keep the user from skipping the question
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (answer) => {
      if (answer === '') {
        return "Answer required, try again";
      }
      return true;
    },
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Enter a brief description of your project (Why did you make it? What does it solve? Key take away?)',
    validate: (answer) => {
      if (answer === '') {
        return "Answer required, try again";
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter step by step instructions to use your application. If no installation is required please provide a link to your deployed application.',
    validate: (answer) => {
      if (answer === '') {
        return "Answer required, try again";
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter detailed instructions on how to use the application. Provide examples if possible.',
    validate: (answer) => {
      if (answer === '') {
        return "Answer required, try again";
      }
      return true;
    },
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
