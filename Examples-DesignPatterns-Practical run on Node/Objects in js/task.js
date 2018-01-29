var task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: true,
    configurable: true
});
//urgentTask inherits from task, so Object.keys() will not show its properties as title or description.
var urgentTask = Object.create(task);// using the same object to create another object with additional/ overriden property "toString"

 Object.defineProperty(urgentTask, 'toString', {
     value: function () {
         return this.title + ' is urgent';
     },
    writable: false,
    enumerable: true,
    configurable: false
 });

task.toString = function () {
        return "something to override";
    }
console.log(task.toString());
console.log(Object.keys(task));
console.log(urgentTask.toString());