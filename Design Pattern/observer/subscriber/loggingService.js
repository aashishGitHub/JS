var LoggingService = function () {
    this.log = function (employee) {
        console.log('Data has been logged for ' + employee.employeeName);
    }
}

module.exports = LoggingService;