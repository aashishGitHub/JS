var AuditService = function () {
    this.audit = function (employee) {
        console.log('Audit has been doen for ' + employee.employeeName);
    }
}

module.exports = AuditService;