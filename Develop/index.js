// inquirer package
const inquirer = require("inquirer");
// package to create files
const fs = require('fs');
// using the util module to use promisify 
const util = require('util');
// link file to generate markdown
const genMarkdown = require('./utils/generateMarkdown');
const { error } = require("console");
// promisify for async
const writeReadMe = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
// validate is used to keep the user from skipping the question
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (answer) => {
      if (answer === "") {
        return "Answer required, try again";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "description",
    message:
      "Enter a brief description of your project (Why did you make it? What does it solve? Key take away?)",
    validate: (answer) => {
      if (answer === "") {
        return "Answer required, try again";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Enter step by step instructions to use your application. If no installation is required please provide a link to your deployed application.",
    validate: (answer) => {
      if (answer === "") {
        return "Answer required, try again";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "usage",
    message:
      "Enter detailed instructions on how to use the application. Provide examples if possible.",
    validate: (answer) => {
      if (answer === "") {
        return "Answer required, try again";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "credits",
    message: "Enter any collaborators, resources, etc.",
    validate: (answer) => {
      if (answer === "") {
        return "Answer required, try again";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "license",
    message:
      "Choose the license you want, use your arrow keys to navigate through the choices.",
    choices: [
      {
        name: "Apache 2.0",
        value:
          "[![License](https://img.shields.io/badge/License-Apache%202.0-7EA8BE)](https://opensource.org/licenses/Apache-2.0)",
      },
    ],
  },
];

// TODO: Create a function to write README file
async function writeToFile(answers, fileName) {
  try {
    let readInput = genMarkdown(answers);
    await writeReadMe(`${fileName}`, readInput);
    console.log("successfully created");
  } catch (err) {
    throw (err);
  }
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  // pass through the array of questions
    .prompt(questions)
    // then pass answer to the writeToFile function
    .then((answers) => {
      console.log('your README here: ', answers)
      writeToFile(answers);
    })
}

// Function call to initialize app
init();
