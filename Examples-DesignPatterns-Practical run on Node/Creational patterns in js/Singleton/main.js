var taskHandler = require('./taskHandler');
var myrepo = require('./repo');  // Applying singleton in repo method
//var myrepo = require('./repo')();

myrepo.save('fromMain')
myrepo.save('fromMain')
myrepo.save('fromMain')
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();

