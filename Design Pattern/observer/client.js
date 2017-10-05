var Manager = require('./publisher/manager');

var AuditService = require('./subscriber/auditService')
var EmailNotification = require('./subscriber/emailNotification')
var LoggerService = require('./subscriber/loggingService')

// publisher
var employee = new Manager("Arun Choudhary", 44343, "Xenatix");

// subscribers
var auditService = new AuditService();
var emailNotification = new EmailNotification();
var loggingService = new LoggerService();

// subscribe
// $watch
// $on
employee.subscribe(auditService.audit);
employee.subscribe(emailNotification.send);
employee.subscribe(loggingService.log);

// notify
// $digest
// $emit / $brodcast
employee.save();

employee.unSubscribe(loggingService.log);

employee.save();