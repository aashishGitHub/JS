// enclosing function
// return function inclosing the scope
var Employee = function () {
    var _name = "Aashish"; // private property
    var get = function () {
        return _name;
    }
    return {
        get: get
    };
};

var emp = new Employee();

console.log(emp.get());