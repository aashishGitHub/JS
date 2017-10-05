function Employee(_employeeName, _employeeCode) {
    this.employeeName = _employeeName;
    this.employeeCode = _employeeCode;
    this.getEmployee = function () {
        return this.employeeName;
    }
}

var emp= new Employee("Aashish",3233);
var emp1= new Employee("fdfd",5656);
var emp2= new Employee("fdfd",656);
console.log(emp.getEmployee());