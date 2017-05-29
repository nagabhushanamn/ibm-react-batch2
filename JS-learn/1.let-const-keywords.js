/*

    Execution-Context / scope
    --------------------------

    => memory/stack-frame with args & locals to execute instructions

    phase-1 : creation

        => all the variables declared  any where with 'var' keyword will get hoisted
           to top of context with default value 'undefined'

    phase-2 : execution

        => instructions execute in seq.

     --------------------------------------------------------

     .js-runtime by default has one global-context  & global-object

     browser-envi ==> window
     Node.js      ==> global/process


     -------------------------------------------------------

     every func invocation also creates new-context
     which is child of context in which func declared

     -------------------------------------------------------

*/

// -------------------------------------------------------

// console.log(a);
// var a = 12;

// -------------------------------------------------------


// var a = 12;
// function f1() {
//     console.log(a);
//     var a = 13;
// }
// f1();  // f1-context ==> global-context


// -------------------------------------------------------

// var a = 12;

// function f1() {
//     function f2() {
//         console.log(a);
//     }
//     f2();
//     //var a = 13;
// }
// f1();

// -------------------------------------------------------

// var i = 100;

// {
//     var i = 200;
// }

// console.log(i)

// -------------------------------------------------------

// var i = 100;
// var i = 200;



/*

 problems declaring variables 'var' keyword

 --> they always get hoist
 --> No block-scope to variables
 --> can re-declare variables multiple times in same block


*/

// soln :  using let & const keywords

// -------------------------------------------------------

// console.log(k);
// let k = 123;

// -------------------------------------------------------

// var i = 200;

// {
//     let i = 300;
// }

// console.log(i);

// -------------------------------------------------------

// let k = 12;
// let k = 13;

// -------------------------------------------------------


const trainer = {
    name:'Nag'
};

trainer.name = "new-trainer";