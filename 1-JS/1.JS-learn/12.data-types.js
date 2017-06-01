


/*

    1. simple/primitives   ==> values

        a. string
        b. number
        c. boolean
        d. undefined
        e. symbol ( es6 )

    2. References  ==> objects



*/


// let name="Nag";
// let selection='a';

// let count=12;
// let cost=12.12;

// let found=true;

// let v;

//---------------------------------


// How to create objs in .js-lang ?

/*

    let ref=new Constructor();

*/



let config = new Object();
config.url = "http://";
config.method = "GET";
config.success = function () {

}

// or literal syntax

let method = "GET";

let newConfig = {
    url: "http://",
    method: method,
    success: function () {

    }
};

// ES6
let action = "done";
let newNewConfig = {
    url: "http://",
    method,
    [action]() {

    }
};


//---------------------------------------



let arr = new Array();
arr.push('biryani');
arr.push('beer');

// literal syntax

let newArr = ["sdasd", "asdasd"];


//--------------------------------------

// color-code-pattern ==> ^\s*#?([A-F0-9]{3}|[A-F0-9]{6})\s*$

// let re=new RegExp("^\\s*#?([A-F0-9]{3}|[A-F0-9]{6})\\s*$");


// or

// let newRe=/^\s*#?([A-F0-9]{3}|[A-F0-9]{6})\s*$/;

//--------------------------------------------


// 
// let add=new Function("n1","n2","let r=n1+n2;return r;");


//

// function add(n1, n2) {
//     let r = n1 + n2; return r;
// }

// let p={
//     sayName:function(){}
// }

//-----------------------------------------------------


// How to access obj's properties


let p={
    name:'Nag',
    "full-name":"Nag N"
};

p.name="Ria";
console.log(p.name);

p['full-name']="asdasd";