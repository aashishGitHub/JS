var myrepo = require('./repo');  //// Applying singleton in repo method
//var myrepo = require('./repo')();

var taskHandler = function () {
    return {
        save: function () {
            myrepo.save('Hi from taskHandler');
        }
    }
}

module.exports = taskHandler();