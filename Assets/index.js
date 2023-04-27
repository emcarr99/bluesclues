// inquirer package
const inquirer = require("inquirer");
// package to create files
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown');

function init() {
  inquirer
    .prompt([
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
      "Enter step by step instructions to install your application. If no installation is required please provide a link to your deployed application.",
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
    type: "rawlist",
    name: "license",
    message:
      "Choose the license you want, use your arrow keys to navigate through the choices.",
    choices: [ 'MIT', 'Apache', 'Boost', 'GNUGPLv3', 'Mozilla', 'None'],
  },
  {
    type: "input",
    name: 'github',
    message: 'Enter your github username, do NOT include any @ symbols',
    validate: (answer) => {
      if (answer === "") {
        return "Answer required, try again";
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email',
    validate: (answer) => {
      if (answer === "") {
        return "Answer required, try again";
      }
      return true;
    },
  }
])
.then((answers) => {
  const newReadMe = genMarkdown(answers);

  fs.writeFile("newREADME.md", newReadMe, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("success");
    }
  });
});
} 

// Function call to initialize app
init();
