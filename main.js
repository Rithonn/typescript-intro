var message = 'Hello world!';
console.log(message);
//To run this make sure that typescript is installed and
//Also make sure that you have node installed then simple do tsc main.tsx and then node main.js
//--------------- Using simple structure declaritives------------------------
function greeter(person) {
    return 'Hello ' + person;
}
var user = "Tom user";
var fullThing = greeter(user);
console.log(fullThing);
//Call the person interface
function greeterInterface(person) {
    return person.firstName + ' ' + person.lastName;
}
//Fields can be blank but you need to make sure
//That if they were declared in the interface above that they are
//at least declared down below as well.
var userInterface = {
    firstName: "Thomas",
    lastName: "McAdams"
};
console.log(greeterInterface(userInterface));
//-------------------Now we are going to try doing this with classes -------------------
var Student = /** @class */ (function () {
    function Student(firstName, middleI, lastName) {
        this.firstName = firstName;
        this.middleI = middleI;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleI + " " + lastName;
    }
    return Student;
}());
function greeterClasses(personClass) {
    return "Hello " + personClass.firstName + " " + personClass.lastName;
}
//Here is where you don't use the middleI but it is included
var userClass = new Student("Thomas", "M", "McAdams");
console.log(userClass);
console.log(greeterClasses(userClass));
