function Employee(_employeeName, _salary){
    this.employeeName=_employeeName;
    this.salary=_salary;
}

Employee.prototype.getEmployeeName = function()
{
    return this.employeeName;
}

// instance of EMployee
var emp1= new Employee("rajiv",0);
var emp2= new Employee("ranjan",0);

// emp1 doesnot have getEmployeeName function so it will delegate to linked object to get function
// only one copy of getEmployeeName is available
//console.log(emp1.getEmployeeName());

// shadowing
emp1.getEmployeeName =function(){
    return "emp1 -> " + Employee.prototype.getEmployeeName.call(this);
}

console.log(emp1.getEmployeeName());
console.log(emp2.getEmployeeName());