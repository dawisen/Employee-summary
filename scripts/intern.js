const employee = require("./employee");

class Intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.id = id;
    this.name = name;
    this.school = school;
    this.role = "Intern";
  }

  getSchool = () => {
    return this.school;
  };
}


module.exports = Intern;