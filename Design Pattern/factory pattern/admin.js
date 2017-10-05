var Employee = require('./employee.js');

function Admin(_employeeName, _employeeCode) {
    Employee.call(this, _employeeName, _employeeCode);
}

Admin.prototype = Object.create(Employee.prototype);

module.exports = Admin;