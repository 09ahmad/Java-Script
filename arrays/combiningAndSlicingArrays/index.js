// let first=[1,2,3];
// let second=[4,5,6];

// const combined=first.concat(second);


// let slice=combined.slice(2,4);
// let slice1=combined.slice(2);
// console.log(combined);
// console.log(slice);
// console.log(slice1);


let first=[{id:1}];
let second=[4,5,6];

const combined=first.concat(second);
first[0].id=10;
let slice=combined.slice(2);

console.log(combined);
console.log(slice);