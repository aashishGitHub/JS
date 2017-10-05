var EmailNotification = function () {
    this.send = function (employee) {
        console.log('Email has been sent to ' + employee.employeeName);
    }
}

module.exports = EmailNotification;