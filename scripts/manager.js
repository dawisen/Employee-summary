const employee = require("./employee");

class Manager extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.id = id;
    this.name = name;
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber = () => {
    return this.officeNumber;
  };
}

module.exports = Manager;
