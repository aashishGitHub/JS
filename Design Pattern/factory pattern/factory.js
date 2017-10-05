var Admin = require('./admin.js');
var HR = require('./hr.js');
var Manager = require('./manager.js');

var Factory = (function () {
    return {
        createEmployeeInstance: function (type, _employeeName, _employeeCode) {
            switch (type) {
                case "Admin":
                    return new Admin(_employeeName, _employeeCode);
                    return;
                case "HR":
                    return new HR(_employeeName, _employeeCode);
                    return;
                case "Manager":
                    return new Manager(_employeeName, _employeeCode);
                    return;
            }
        }
    }
})();

module.exports = Factory;