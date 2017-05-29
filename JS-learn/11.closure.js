

/*

    A closure is a function having access to the parent scope, 
    even after the parent function has closed.


    why/where we need closures?

    --> to abstract public-behav of any module
    --> Async programming

*/


// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes";
//     let stories = "bla bla bla";
//     function learn() {
//         console.log('learning with ' + notes);
//     }

//     // learn();

//     console.log('teaching end..');
//     return learn;
// }


// let learnFunc = teach('.js'); // teach-context with args + local 
// learnFunc();
// learnFunc();
// learnFunc();
// learnFunc();

//------------------------------------------------------------------



// to abstract public-behav of any module


// e.g counter module


// const counter = (function () {

//     let count = 0;  // private

//     // public
//     function doCount() {
//         count++;
//     }
//     function getCount() {
//         return count;
//     }

//     return {
//         inc: doCount,
//         get: getCount
//     };

// })();

// // let counter = init();
// // let counter2 = init();


//--------------------------------------------------


// --> Async programming


// by default , on event , every handlers always executes async


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        // let self=this;
        // setInterval(function () {
        //     console.dir(this);
        //     self.age++;
        //     console.log(self.age);
        // }, 1000);

        // setInterval(() => {
        //     this.age++;
        //     console.log(this.age);
        // }, 1000);

    }
}

let p = new Person('Ria', 0);





