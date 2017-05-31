

// array destructuring


// let nums=[1,2,3];

// let a=nums[0];
// let b=nums[1];
// let c=nums[2];

// let [a,b,c]=nums;

//---------------------------------

// let nums=[1,2,3];
// let [a,b]=nums;

//---------------------------------

// let nums=[1,2];
// let [a,b,c,d]=nums;


//----------------------------------

// let nums=[1,2];
// let [a,b,c=3,d=4]=nums;

//----------------------------------

// let nums = [1, 2, [3, 4]];
// let [a, b, [c, d]] = nums;

//----------------------------------


// let nums=[1,2,3];
// let [a,,c]=nums;

let a, b;

[a, b] = nums;

//----------------------------------



// object destructuring


let person = { name: 'Nag', age: 32 };

// let name=person.name;
// let ae=person.age;


// let {name,age}=person;
// let {name:myName,age:myAge}=person;

let myName;
let myAge;

({ name: myName, age: myAge } = person);

//------------------------




