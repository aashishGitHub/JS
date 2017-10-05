// multiple instance can be created and all instance share single copy of Employee prototype
// private and public can be implemented
// __prototype__ of any objects created by the function constructor
function Employee(_employeeName, _salary){
  var salary=_salary; // private
  this.employeeName=_employeeName; // public
}

Employee.prototype.getEmployeeName=function(){
  return this.employeeName;
}

// single instance is created
// plan and clear object, best fit for DTO
// no OOPS, no constructor
// all are public
// __prototype__ is the Object
// Creating objects with Object.create() utilizes an object literal as a __prototype__ for the objects created by this method. 
// All properties and methods added to the object literal will be available to all objects created from it through true prototypal inheritance
var Patient={
  contactId:1,
  contactName:"Jhon",
  getContactName:function(){
    return this.contactName;
  }
}

var employee1= new Employee("RR",2121212);
var employee2= new Employee("AC",2121212);
console.log(employee1.salary);
console.log(employee1.getEmployeeName());
console.log(employee2.getEmployeeName());
console.log(Patient.getContactName());

// creating object using Object.create()
var contact1=Object.create(Patient);
contact1.contactId=100;
var contact1=Object.create(Patient);
contact1.contactId=100;
var contact2=Object.create(Patient); // used for object linking
console.log(contact1.contactId);
console.log(contact2.contactId);
