var Logger = (function () {
    var logger;

    // private
    function Logger() {

    }
    Logger.prototype.log = function (message) {
        console.log(message + ' has been logged.');
    }

    return {
        getInstance: function () {
            if (!logger)
                logger = new Logger();
            return logger;
        }
    };
})();

var instance1 = Logger.getInstance();
var instance2 = Logger.getInstance();
console.log(instance1 === instance2);
instance1.log("hello");