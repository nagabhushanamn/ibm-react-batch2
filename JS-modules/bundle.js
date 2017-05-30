(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// console.log('-app.js-');

// var global = global || {};


// global.mod1.doGreet();


//--------------------------------------------------


// console.log('-app.js-');

// let mod1=require('./pack1');
// mod1.greet('en');
// mod1.greet('es');

// // mod1.sayGM();
// // mod1.sayGM();

//--------------------------------------------------


let ibmGreet=require('ibm-greet');

ibmGreet.greet("en");
ibmGreet.sayGM();
},{"ibm-greet":2}],2:[function(require,module,exports){

// var global = global || {};

// (function () {


//     global.mod2.doGreet();
//     global.mod3.doGreet();

//     var greet = {
//         doGreet: function () {
//             console.log("mod1 work");
//         }
//     };

//     // export
//     global.mod1 = greet;

// })();

//-----------------------------------------------


console.log('-mod1.js-');


let message = "Good Morning";

function sayGM() {
    console.log(message);
}

// sayGM();

let en = require('./mod2');
let es = require('./mod3');

function greet(lang) {
    if (lang === "en") {
        en();
    }
    if (lang === "es") {
        es();
    }
}

module.exports = {
    sayGM,
    greet
};

},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){

// var global = global || {};

// (function () {

//     var greet = {
//         doGreet: function () {
//                console.log("mod2 work");
//         }
//     };

//     global.mod2=greet;

// })();

//----------------------------------------------------



function greet(){
    console.log("Hello..");
}

module.exports=greet;

},{}],4:[function(require,module,exports){

// var global = global || {};

// (function () {

//     var greet = {
//         doGreet: function () {
//                console.log("mod3 work");
//         }
//     };

//     var private = 123;

//     global.mod3 = greet;

// })();


//------------------------------------------------




function greet(){
    console.log("Ola..");
}

module.exports=greet;

},{}]},{},[1]);
