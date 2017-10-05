function Employee(_employeeName, _salary){
    this.employeeName=_employeeName;
    this.salary=_salary;
}

Employee.prototype.getEmployeeName=function(){
    return this.employeeName;
}

var Manager=Object.create(Employee.prototype);
Manager.init=function(_employeeName, _salary, _projectName)
{
    Employee.call(this, _employeeName, _salary);
    this.projectName=_projectName;
}

Manager.getProjectName=function(){
    return this.projectName;
}

//var manager1= new Manager("AC",1122212,"X-Xenatix");
var manager1=Object.create(Manager);
Manager.init.call(manager1, "AC", 2121212, "X-Xenatix");
console.log(manager1.getProjectName());