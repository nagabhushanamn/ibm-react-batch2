

// Syntax


// let getPrice=function(){
//     return 100.00;
// }

// with arrow-syntax

// let getPrice=()=>{return 100.00;}; 
// let getPrice=()=>100.00;
// let getPrice=(count)=>count*100.00;
// let getPrice=count=>count*100.00;
// let getPrice=(count,tax)=>count*100.00+tax;
// let getPrice=(count,tax)=>{
//     let price=count*100.00;
//     let total=price+tax;
//     return total;
// };

//--------------------------------------

// why we need arrow-function ?

   /*

    --> always bound to creator
    --> can't dynamically to any other object

   */


// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching..");


//         // let askQues = function (ques) {
//         //     console.dir(this);
//         //     console.log(this.name + " anwering " + ques);
//         // };

//         let askQues = (ques) => {
//             console.dir(this);
//             console.log(this.name + " anwering " + ques);
//         };


//         console.log(" teaching..end");
//         return askQues;
//     }
// };

// let askQues = trainer.doTeach();
// askQues('ques-1');


// let newTrainer = { name: 'Ria' };
// askQues.call(newTrainer, "ques-2");


//------------------------------------------




// let invoice={
//     num:123,
//     process:function(){
//         console.log(this.num+" processed");
//     }
// };

// let invoice={
//     num:123,
//     process:()=>{
//         console.log(this.num+" processed");
//     }
// };

// let invoice={
//     num:123,
//     process:function(){
//         console.log(this.num+" processed partially");
//         return function(){console.log(this.num+" processed completly");}
//     }
// };

// let completeProcess=invoice.process();
// completeProcess();

// let newInvoice={num:321};
// completeProcess.call(newInvoice);


let func=()=>{console.log(this)};
func();