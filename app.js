const Manager = require("./scripts/manager");
const Engineer = require("./scripts/engineer");
const Intern = require("./scripts/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const promptUser = () => {
  return inquirer.prompt([
    {
      name: "name",
      message: "What is your name?",
    },
    {
      type: "list",
      message: "Select your role",
      name: "role",
      choices: [
        new inquirer.Separator("Use the arrow keys to select an answer"),
        {
          name: "Manager",
        },
        {
          name: "Engineer",
        },
        {
          name: "Intern",
        },
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return "You must choose one.";
        }

        return true;
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office phone number?",
      when: (answers) => answers.role === "Manager",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
      when: (answers) => answers.role === "Engineer",
    },
    {
      type: "input",
      name: "school",
      message: "What is your school name?",
      when: (answers) => answers.role === "Intern",
    },
    {
      name: "id",
      message: "What is your ID number?",
      validate: function (answer) {
        if (isNaN(answer) === true || answer <= 0) {
          return "You must enter a valid number";
        }
        return true;
      },
    },
    {
      name: "email",
      message: "What is your email?",
    },
  ]);
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```




