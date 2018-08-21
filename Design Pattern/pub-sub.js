var events = {
                events: {},
		subscribe: function (eventName, object, callback) {
			this.events[eventName] = this.events[eventName] || [];
			this.events[eventName].push({object: object, callback: callback});
		},
		unsubscribe: function(eventName, object, callback) {
			if (this.events[eventName]) {
				for (var i = 0; i < this.events[eventName].length; i++) {
					if (this.events[eventName][i].object === object) {
					  this.events[eventName].splice(i, 1);
					  break;
					}
				};
			}
		},
		publish: function (eventName, data) {
			if (this.events[eventName]) {
				this.events[eventName].forEach(function(instance) {
					instance.callback(data);// calling the callback() of subscriptions with data published.
				});
			}
		}
};

-------------------------------OR in production ------------------------------------------
(function () {
    'use strict';

    var asis = window.asis;

    asis.PubSub = function () {
        ///<summary>Events pub/sub manager</summary>

        var _events = {};

        this.subscribe = function (eventName, handler) {
            _events[eventName] = _events[eventName] || [];
            _events[eventName].push(handler);
        };

        this.unsubscribe = function (eventName, handler) {
            var i = 0,
                handlers = _events[eventName];

            if (handlers) {
                while (i < handlers.length) {
                    if (handlers[i] === handler) {
                        handlers.splice(i, 1);
                    } else {
                        i++;
                    }
                }
            }
        };

        this.publish = function (eventName) {
            var i,
                args,
                handlers = _events[eventName];

            if (handlers && handlers.length > 0) {
                args = Array.prototype.slice.call(arguments, 1);
                for (i = 0; i < handlers.length; i++) {
                    handlers[i].apply(null, args);
                }
            }
        };
    };

}());
