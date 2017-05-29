/*

    this ==> owner of current execution-context

*/

// console.log(this);

// function func() {
//     console.log(this);
// }
// func(); // func-context's owner ==> global-obj


//-------------------------------------------------



// why we need 'this' keyword ?

// let pName = "Global";

// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         // let pName = "Local";
//         //console.log('im ' + pName);  // contex's hierarchy data
//         //console.log('im ' + person.pName); // obj's data
//     }
// };

// // person.sayName();

// let oldPerson = person;
// person = {
//     pName: 'Ria'
// };

// oldPerson.sayName();

//-----------------------------------------------------


// Function Binding
//--------------------

// static function-binding


// let p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name); } };
// let p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name); } };

// function sayNameForAll() {
//     console.log('im '+this.name);
// }

// let p1 = { name: 'Nag', sayName: sayNameForAll}
// let p2 = { name: 'Ria', sayName: sayNameForAll }

// sayNameForAll(); // im ?? // function-invocation  ( this ==> global-obj)
// p1.sayName(); // im Nag   // method-invocation    ( this ==> invoker-obj)
// p2.sayName(); // im Ria


//---------------------------------


// dynamic function-binding


// let greetLib = {
//     name:'Anony',
//     sayName: function (message,from) {
//         console.log(message+' im '+this.name+" : "+from);
//     }
// };

// let p = { name: 'Nag'};
// let emp = { name: 'IBM' };

// // way-1
// greetLib.sayName.call(p,"Hello","CHN");
// greetLib.sayName.call(emp,"Hey","Universe");


// way-2
// greetLib.sayName.apply(p,["Hello","CHN"]);
// greetLib.sayName.apply(emp,["Hey","Universe"]);

// way-3

// let newF = greetLib.sayName.bind(p, "Hello", "Chn");
// newF();
// newF();

// let newFF = greetLib.sayName.bind(emp);
// newFF("Hey", "BLR");
// newFF("Dude","HYD");




//-----------------------------------------------------


// JS-class

/*

    How to do inheritance in .js-lang ?

    using prototypes

    parent-obj ( prototype)  <========== child-obj

*/


// ES5


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.sayName = function () {
//     //     console.log('im ' + this.name);
//     // }
//     // this.sayAge = function () {
//     //     console.log('im ' + this.age + " old");
//     // }
// }

// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }


// ES6 - class

// class Person {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.address = "CHN";
//     }

//     sayName() {
//         console.log('im ' + this.name);
//     }

//     sayAge() {
//         console.log('im ' + this.name);
//     }
// }


// // let p1 = new Person('Nag', 32);
// // let p2 = new Person('Ria', 2);
// //...



// class Employee extends Person {

//     constructor(name, age, salary) {
//         super(name, age);
//         this.salary = salary;
//     }
//     saySalary() {
//         console.log('i get ' + this.salary);
//     }
//     askRaise() {
//         return this.salary * 0.02;
//     }
// }


// // let emp = new Employee('Nag', 32, 10000);

// class Boss extends Employee {

//     askRaise() {
//         return this.salary * 0.2 + super.askRaise();
//     }

// }

// let boss = new Boss('Boss', 100, 10000);



// class SuperBoss extends Boss {
//     askRaise() {
//         return this.salary * 0.2 + super.super.askRaise();
//     }
// }

// let superBoss = new Boss("Nag", 32, 10000);


//------------------------------------------


/*

    .js-lang , we can inoke function in 4 ways

    1. function invocation  ( this ==> global-obj )
    2. method-invocation    ( this ==> invoker-obj)
    3. call/apply/bind invocaton ( this ==> arg-obj )
    4. constructor invocation ( this ==> new-obj )

*/

//----------------------------------------------------



// function Person(name){
//     this.name=name;
// }

// Person('Abc');

//-----------------------------

// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }
// var p=new Person("Abc");

//--------------------------------------------------


// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         let self = this;
//         let doLearn = function () {
//             console.log(this.name+' learning .js from ' + self.name);
//         }
//         //doLearn();
//         let emp = { name: "IBM" };
//         doLearn.call(emp);
//     }
// };
// // trainer.doTeach();

// let oldTrainer = trainer;
// trainer = { name: 'Ria' };

// oldTrainer.doTeach();


//--------------------------------------------------

// function sessionStart() {


//     class Trainer {
//         constructor(name) {
//             this.name = name;
//         }
//         doTeach() {
//             console.log(this.name + " teaching .js");
//             let self = this;
//             let doLearn = function () {
//                 console.log(this.name + " learning .js from " + self.name);
//             }
//             return doLearn;
//         }
//     }

//     class Employee {
//         constructor(name) {
//             this.name = name;
//         }
//     }

//     let tnr = new Trainer('Nag');  // constructor invocation

//     let emp1 = new Employee('Emp1');
//     let emp2 = new Employee('Emp2');


//     let doLearnFunc = tnr.doTeach();  // method invocation

//     doLearnFunc.call(emp1);  // call/apply/bind invocation
//     doLearnFunc.call(emp2);

// }

// sessionStart();  // function invocation
