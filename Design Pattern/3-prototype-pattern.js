function Employee(_employeeName, _employeeCode) {
    this.employeeName = _employeeName;
    this.employeeCode = _employeeCode;
}

Employee.prototype.getEmployee = function () {
    return this.employeeName;
}

module.exports = Employee;