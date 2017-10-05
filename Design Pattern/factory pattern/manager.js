var Employee = require('./employee.js');

function Manager(_employeeName, _employeeCode) {
    Employee.call(this, _employeeName, _employeeCode);
}

Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager;