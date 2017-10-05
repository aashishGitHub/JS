function sayHello(firstName, lastName) {
    console.log(`${this.sayHello()} ${firstName} ${lastName}`);
}

var context = {
    sayHello() {
        return "Hello";
    }
}

const firstName = "Aashish"; // const is used to create readonly variable
const lastName = "Kumar";

sayHello.apply(context, [firstName, lastName]);