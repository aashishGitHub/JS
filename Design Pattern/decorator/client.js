var Employee = require('./employee');
var Manager = require('./manager');

var employee1 = new Employee("Rajiv Ranjan", 487878);
var employee2= new Manager("Arun Choudhary",4783483);
var employee3= new Manager("Narendra Verma",67777);

// var employee2 = new Employee("Arun Choudhary", 84512);
// employee2.notify = function () {
//     console.log('Email has been sent to ' + this.get());
// }

// employee2.save = function () {
//     this.notify(); // email
//     // logging
//     // auditting
//     Employee.prototype.save.call(this);
// }

// var employee3 = new Employee("Narendra Verma", 84512);
// employee3.notify = function () {
//     console.log('Email has been sent to ' + this.get());
// }

// employee3.save = function () {
//     this.notify(); // email
//     // logging
//     // auditting
//     Employee.prototype.save.call(this);
// }

employee1.save();
employee2.save();
employee3.save();