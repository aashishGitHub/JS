var Employee = require('./employee');

// publisher
var Manager = function (_employeeName, _employeeCode) {
    Employee.call(this, _employeeName, _employeeCode);
    this.observers = [];
}

// add
Manager.prototype.subscribe = function (subscriber) {
    this.observers.push(subscriber);
}

// remove
Manager.prototype.unSubscribe = function (subscriber) {
    var index = this.observers.indexOf(subscriber);
    this.observers.splice(index, 1);
}

Manager.prototype.notify = function (context) {
    for (var i = 0; i < this.observers.length; i++) {
        this.observers[i](context);
    }
}

Manager.prototype.save = function () {
    this.notify(this);
    Employee.prototype.save.call(this);
}

module.exports = Manager;