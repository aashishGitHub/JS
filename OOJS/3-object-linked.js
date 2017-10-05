function Employee(_employeeName, _salary){
    this.employeeName=_employeeName;
    this.salary=_salary;
}

Employee.prototype.getEmployeeName=function(){
    return this.employeeName;
}

function Manager(_employeeName, _salary, _projectName)
{
    Employee.call(this, _employeeName, _salary);
    this.projectName=_projectName;
}

// Manager.prototype = Employee.prototype // -> manager prototype is also added into employee
//Manager.prototype = new Employee(); // -> add employeename & salary property manager prototype
Manager.prototype = Object.create(Employee.prototype); // same as new keyword except last two steps
Manager.prototype.getProjectName=function(){
    return this.projectName;
}

var employee1= new Employee("AC",1122212);
var manager1= new Manager("AC",1122212,"X-Xenatix");
console.log(manager1.constructor); // manager1 does not have .constructor, delegates to Manager.prototype but it does not have .constructor as well
// bcz it has copied prototype of Employee
// so manager1.constructor is Employee