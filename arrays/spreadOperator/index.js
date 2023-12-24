let first=[1,2,3];
let second=[4,5,6] ;


// let combined=first.concat(second);

let combined=[...first,'a',...second];
let copy=combined.slice();
let copy1=[...combined];
// console.log(combined);
// console.log(copy);
console.log(copy1);

