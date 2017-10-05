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

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.getProjectName=function(){
    return this.projectName;
}

//var manager1= new Manager("AC",1122212,"X-Xenatix");
var manager1=Object.create(Manager.prototype);
Manager.call(manager1, "AC", 2121212, "X-Xenatix");
console.log(manager1.getProjectName());