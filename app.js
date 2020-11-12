const Manager = require("./scripts/manager");
const Engineer = require("./scripts/engineer");
const Intern = require("./scripts/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./scripts/htmlRenderer");
const { run } = require("jest");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [
  {
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    message: "Select your role",
    name: "role",
    choices: [
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
  },
  {
    name: "officeNumber",
    message: "What is your office phone number?",
    when: (answers) => answers.role === "Manager",
  },
  {
    name: "github",
    message: "What is your Github username?",
    when: (answers) => answers.role === "Engineer",
  },
  {
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
  {
    type: "list",
    name: "makeAnotherEmployee",
    message: "Would you like to create another employee?",
    choices: [
      {
        name: "Yes",
      },
      {
        name: "No",
      },
    ],
  },
];
const employees = [];

function runQuestions() {
    inquirer.prompt(questions).then(async (answers) => {
      console.log(answers);
      if (answers.role === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        employees.push(engineer);
      }
      if (answers.role === "Manager") {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        employees.push(manager);
      }
      if (answers.role === "Intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
      }
      if (answers.makeAnotherEmployee === "Yes") {
      runQuestions();
      }
      else {
        return employees;
        
      }
    });
}

const generateHTML = (employees) => {
  return render(employees);
}

runQuestions().then((employees) => {
    const html = generateHTML(employees);

    return fs.readFile(outputPath, html);
  }).then(() => {console.log("html file created");}).catch((err) => console.log(err));


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.







