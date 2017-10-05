'use strict'
class Employee {
    constructor(_employeeName, _employeeCode) {
        this.employeeName = _employeeName;
        this.employeeCode = _employeeCode;
    };

    getEmployee() {
        return this.employeeName;
    }
}

var employee1 = new Employee("Aashish Kumar", 7767);
console.log(employee1.getEmployee());