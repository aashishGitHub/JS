var Employee = function (_employeeName, _employeeCode) {
    this.employeeName = _employeeName;
    this.employeeCode = _employeeCode;
}

Employee.prototype.get = function () {
    return this.employeeName;
}

Employee.prototype.save = function () {
    console.log(this.employeeName + ' has been saved.');
}

module.exports = Employee;