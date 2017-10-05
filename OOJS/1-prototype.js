// function is represented by circle. it has prototype property
function Employee(_employeeName, _salary){
    this.employeeName=_employeeName;
    this.salary=_salary;
}

// getEmployeeName is added to Employee's prototype i.e. object of employee [square]
// it has .constructor property
Employee.prototype.getEmployeeName = function()
{
    return this.employeeName;
}

// instance of EMployee
var emp1= new Employee("rajiv",0);
var emp2= new Employee("ranjan",0);

// function is added to emp1 object
emp1.getITRStatus =  function(){
    return "ITR is done.";
};

console.log(emp1.getEmployeeName());
console.log(emp1.getITRStatus());
//emp2.hey(); // function not defined

console.log(emp1.constructor === Employee);
console.log(emp1.constructor === emp2.constructor);
console.log(emp1.__proto__ === Employee.prototype);
console.log(emp1.__proto__ === emp2.__proto__);
console.log(emp1.__proto__ === Object.getPrototypeOf(emp2));