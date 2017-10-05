var Employee = require('./employee.js');

function HR(_employeeName, _employeeCode) {
    Employee.call(this, _employeeName, _employeeCode);
}

HR.prototype = Object.create(Employee.prototype);

module.exports = HR;