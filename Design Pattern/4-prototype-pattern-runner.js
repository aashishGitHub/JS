//import {Employee} from './3-prototype-pattern' // ES6
var Employee = require('./3-prototype-pattern.js');

// object creation
var emp = new Employee("Aashish", 3233);
var emp1 = new Employee("Kumar", 3233);
var emp2 = new Employee("Kamal", 3233);
var emp3 = new Employee("Nikhil", 3233);

console.log(emp.getEmployee());
console.log(emp1.getEmployee());
console.log(emp2.getEmployee());
console.log(emp3.getEmployee());