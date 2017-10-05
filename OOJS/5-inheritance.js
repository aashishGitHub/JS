var Employee = {
    init: function (_employeeName, _salary) {
        this.employeeName = _employeeName;
        this.salary = _salary;
    },
    getEmployeeName: function () {
        return this.employeeName;
    },
    type: "p"
};

var Manager = {
    init: function (_employeeName, _salary, _projectName) {
        Employee.init.call(this, _employeeName, _salary);
        this.projectName = _projectName;
    },
    getProjectName: function () {
        return this.projectName;
    },
    __proto__: Employee
}

var manager1 = Object.create(Manager);
Manager.init.call(manager1, "AA", 21212, "xen");
console.log(manager1.type);
console.log(manager1.getEmployeeName());
console.log(manager1.getProjectName());