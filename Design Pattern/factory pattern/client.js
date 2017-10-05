var Factory = require('./factory.js');

var admin = Factory.createEmployeeInstance('Admin', "Chona G", 767);
var hr = Factory.createEmployeeInstance('HR', "Prem G", 767);
var manager = Factory.createEmployeeInstance('Manager', "AC", 767);

console.log(admin.getEmployee());
console.log(hr.getEmployee());
console.log(manager.getEmployee());