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

