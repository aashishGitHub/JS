var Employee = require('./employee');

var Manager = function (_employeeName, _employeeCode, _assignedProjects) {
    Employee.call(this, _employeeName, _employeeCode);
    this.assignedProjects = _assignedProjects;
}

Manager.prototype.notify = function () {
    console.log('Email has been sent to ' + this.employeeName);
}

Manager.prototype.save = function () {
    this.notify();
    Employee.prototype.save.call(this);
}

module.exports = Manager;