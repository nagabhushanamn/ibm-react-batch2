// ES5

// function func(a) {
//     console.log(a);
//     console.dir(arguments);
// }
// func(12,13);


// function func(a, b) {

//     // if (!a) {
//     //     a = 1;
//     // }
//     // if (!b) {
//     //     b = 2;
//     // }

//     a = a || 1;
//     b = b || 2;

//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);


//----------------------


// ES6


function func(a=1, b=2) {
    console.log(a);
    console.log(b);
}

func(undefined, 20);
