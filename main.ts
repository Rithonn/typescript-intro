let message = 'Hello world!';
console.log(message);
//To run this make sure that typescript is installed and
//Also make sure that you have node installed then simple do tsc main.tsx and then node main.js

//--------------- Using simple structure declaritives------------------------
function greeter(person: String){
    return 'Hello ' + person;
}

let user =  "Tom user";
let fullThing = greeter(user);
console.log(fullThing);

//---------------- Now using interfaces to control things -----------------------

//Trying this with interfaces instead
//Make sure the interface is capitlized
interface Person {
    firstName: string;
    lastName: string;
}
//Call the person interface
function greeterInterface(person: Person) {
    return person.firstName + ' ' + person.lastName;
}

//Fields can be blank but you need to make sure
//That if they were declared in the interface above that they are
//at least declared down below as well.
let userInterface = {
    firstName: "Thomas",
    lastName: "McAdams"
};

console.log(greeterInterface(userInterface));

//-------------------Now we are going to try doing this with classes -------------------

class Student {
    fullName: string;

    constructor(public firstName: string, public middleI: string, public lastName: string) {
        this.fullName = firstName + " " + middleI + " " + lastName;
    }

}
//Interface can have whatever you want in it to display. Does not need to have every field that student would take
interface ClassPerson {
    firstName: string;
    middleI: string;
    lastName: string;
}

function greeterClasses(personClass: ClassPerson) {
    return "Hello " + personClass.firstName + " " + personClass.lastName;
}
//Here is where you don't use the middleI but it is included
let userClass = new Student("Thomas","M","McAdams")

console.log(userClass);
console.log(greeterClasses(userClass))