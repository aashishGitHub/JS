var name = "Rajiv Ranjan";

function getName() {
    var name = "AC";
    return function () {
        console.log(name);
    }
};
name = "RR";
(getName())();


// function returns another function
// innter function remembers other function lexical scope;
function makeCounter() {
    var count = 0;

    return function () {
        return count++;
    };
};

var counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2