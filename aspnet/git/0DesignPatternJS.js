// Ref..:
// https://codesource.io/javascript-design-patterns/


// JavaScript Design Patterns Every developer should know
// Design patterns in JavaScript are reusable solutions applied to commonly occurring problems in writing JavaScript web applications.




// What are the 3 common design patterns groups?

// 1. Creational: These patterns are designed for class instantiation. They can be either class-creation patterns or object-creational patterns.

// 2. Structural: These patterns are designed with regard to a class's structure and composition. The main goal of most of these patterns is to increase the functionality of the class(es) involved, without changing much of its composition.

// 3. Behavioral: These patterns are designed depending on how one class communicates with others.






// Short notes for interview:
// Lot of patterns are there: few are
// 1.NullObject(To avoid bunch of null checks.)
// 2.Builder Pattern(To avoid calling sequence of params. make it optional rather.)
// 3.Singleton pattern(Shared single obj. instance)
// 4.Facade Pattern(getFetch() example)
    //We can use Axios/fetch/or any other thing in global.
// 5.Command Pattern(Saved in history array like, can save, undo, redo with command structure)
// It is quite appropriate to refer JavaScript design patterns as templates to provide solutions to problems but not quite to say that these patterns can replace the developers.
// 6. Factory Pattern()
// The factory pattern is a creational design pattern that uses factory methods to create objects — rather than by calling a constructor.
// 7.Constructor Pattern()
// 8.Hexagonal Pattern()


// Design patterns help combine experiences of many developers to structure the codes in an optimized manner that meet the problems we are seeking solutions to, and gives common vocabulary used to describe solutions to our problems than describing the syntax and semantics of our code.


// JavaScript design patterns assist developers to write organized, beautiful and well-structured codes. Although design patterns, when used can easily be re-used, they can never supplement developers, rather they only support them by preventing minor issues that could lead to major problems on the web application development by providing generalized solutions that are not tied to a specific problem.

// They decrease the overall codebase by doing away with unnecessary repetitions, thus makes our code more robust than the ad-hoc solutions.

// JavaScript Design Patterns
// In this article, I will explore seven best and most popular JavaScript design patterns, which of course most of them will fall under three categories namely; creation design patterns, structural design patterns, and behavioral design patterns. A pattern is something like the following image; just to acquaint you into the context.

// 1. Constructor Design Pattern.
// This is a special method that is used to initialize the newly created objects once a memory is allocated. Since JavaScript is typically object-oriented, it deals with objects most, therefore I intend to delve in to object constructors. There are three ways to create new objects in JavaScript:

// The following is one way to create a constructor design pattern.


// // This creates a new empty Object

// var newObject = {};

// // This creates a new empty Object

// var newObject = Object.create(Object.prototype);

// var newObject = newObject();
// To access the properties of a function, you need to initialize the object.

// const object = new ConstructorObject();
// Whereby the new keyword above tells JavaScript that aconstructorObject should act as a constructor. Inheritance is one thing this design pattern does not support.  Find out more detail here.

// 2. Prototype Pattern
// The prototype pattern is based on prototypical inheritance whereby objects created to act as prototypes for other objects. In reality, prototypes act as a blueprint for each object constructor created.

// Example

// var myCar= {
// name:"Ford",
// brake:function(){
// console.log("Stop! I am applying brakes");
// }
// Panic : function (){
// console.log ( "wait. how do you stop thuis thing?")
// }
// }
// // use objec create to instansiate a new car
// var yourCar= object.create(myCar);
// //You can now see that one is a prototype of the other
// console.log (yourCar.name);]
// 3. Module Design Pattern
// In the module design pattern, there is an improvement from the prototype pattern. The different types of modifiers (both private and public) are set in the module pattern. You can create similar functions or properties without conflicts. There is the flexibility of renaming functions publicly. The daunting part of this is the inability to override the created functions from the outside environment.

// Example

// function AnimalContainter () {

// const container = [];

// function addAnimal (name) {
// container.push(name);
// }

// function getAllAnimals() {
// return container;
// }

// function removeAnimal(name) {
// const index = container.indexOf(name);
// if(index < 1) {
// throw new Error('Animal not found in container');
// }
// container.splice(index, 1)
// }

// return {
// add: addAnimal,
// get: getAllAnimals,
// remove: removeAnimal
// }
// }

// const container = AnimalContainter();
// container.add('Hen');
// container.add('Goat');
// container.add('Sheep');

// console.log(container.get()) //Array(3) ["Hen", "Goat", "Sheep"]
// container.remove('Sheep')
// console.log(container.get()); //Array(2) ["Hen", "Goat"]
// 4. Singleton Pattern
// It is essential in a scenario where only one instance needs to be created, for example, a database connection. It is only possible to create an instance when the connection is closed or you make sure to close the open instance before opening a new one.  This pattern is also referred to as strict pattern, one drawback associated with this pattern is its daunting experience in testing because of its hidden dependencies objects which are not easily singled out for testing.

// Example

// function DatabaseConnection () {

// let databaseInstance = null;

// // tracks the number of instances created at a certain time
// let count = 0;

// function init() {
// console.log(`Opening database #${count + 1}`);
// //now perform operation
// }
// function createIntance() {
// if(databaseInstance == null) {
// databaseInstance = init();
// }
// return databaseInstance;
// }
// function closeIntance() {
// console.log('closing database');
// databaseInstance = null;
// }
// return {
// open: createIntance,
// close: closeIntance
// }
// }

// const database = DatabseConnection();
// database.open(); //Open database #1
// database.open(); //Open database #1
// database.open(); //Open database #1
// database.close(); //close database
// 5. Factory Pattern.
// It is a creational concerned with the creation of objects without the need for a constructor. It provides a generic interface for creating objects, where we can specify the type of factory objects to be created. Therefore, we only specify the object and the factory instantiates and returns it for us to use. It is wise for us to use factory pattern when the object component set up has a high level of complexity and when we want to create different instances of objects easily depending on the environment we are in. We can also use factory pattern when working with many small objects sharing the same properties and when composing objects that need decoupling.

// Example

// // Dealer A

// DealerA = {};

// DealerA.title = function title() {
// return "Dealer A";
// };

// DealerA.pay = function pay(amount) {
// console.log(
// `set up configuration using username: ${this.username} and password: ${
// this.password
// }`
// );
// return `Payment for service ${amount} is successful using ${this.title()}`;
// };

// //Dealer B

// DealerB = {};
// DealerB.title = function title() {
// return "Dealer B";
// };

// DealerB.pay = function pay(amount) {
// console.log(
// `set up configuration using username: ${this.username}
// and password: ${this.password}`
// );
// return `Payment for service ${amount} is successful using ${this.title()}`;
// };

// //@param {*} DealerOption
// //@param {*} config

// function DealerFactory(DealerOption, config = {}) {
// const dealer = Object.create(dealerOption);
// Object.assign(dealer, config);
// return dealer;
// }

// const dealerFactory = DealerFactory(DealerA, {
// username: "user",
// password: "pass"
// });
// console.log(dealerFactory.title());
// console.log(dealerFactory.pay(12));

// const dealerFactory2 = DealerFactory(DealerB, {
// username: "user2",
// password: "pass2"
// });
// console.log(dealerFactory2.title());
// console.log(dealerFactory2.pay(50));

// 6. Observer Pattern
// The observer design pattern is handy in a place where objects communicate with other sets of objects simultaneously. In this observer pattern, there is no unnecessary push and pull of events across the states, rather the modules involved only modify the current state of data.

// Example

// function Observer() {
// this.observerContainer = [];
// }

// Observer.prototype.subscribe = function (element) {
// this.observerContainer.push(element);
// }

// // the following removes an element from the container

// Observer.prototype.unsubscribe = function (element) {

// const elementIndex = this.observerContainer.indexOf(element);
// if (elementIndex &gt; -1) {
// this.observerContainer.splice(elementIndex, 1);
// }
// }

// /**
// * we notify elements added to the container by calling
// * each subscribed components added to our container
// */
// Observer.prototype.notifyAll = function (element) {
// this.observerContainer.forEach(function (observerElement) {
// observerElement(element);
// });
// }
// 7. Command Pattern
// To wrap up, I would say the command design pattern ends my 7 best sums of JavaScript design patterns. The command design pattern encapsulates method invocation, operations, or requests into a single object so that we can pass method calls at our discretion. The command design pattern gives us an opportunity to issue commands from anything executing commands and delegates responsibility to different objects instead. These commands are presented in run() and execute() format.

// (function(){

// var carManager = {

// //information requested
// requestInfo: function( model, id ){
// return "The information for " + model + " with ID " + id + " is foo bar";
// },

// // now purchase the car
// buyVehicle: function( model, id ){
// return "You have successfully purchased Item " + id + ", a " + model;
// },

// // now arrange a viewing
// arrangeViewing: function( model, id ){
// return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
// }
// };
// })();
// Conclusion
// It is beneficial for JavaScript developers to use design patterns. Some major advantages of using design patterns include project maintainability and also cuts off unnecessary work on the development cycle. Even though JavaScript design patterns can provide solutions to complex problems, needless to say, rapid development and productivity, it is improper to conclude that these design patterns can replace the developers.

// For further reading, I recommend this book for more insight.