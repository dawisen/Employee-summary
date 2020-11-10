const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.id = id;
        this.name = name;
        this.github = github;
        this.role = "Engineer";
    }

    getGithub = () => {
        return this.github;
    }
}


module.exports = Engineer;