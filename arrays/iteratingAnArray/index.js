const numbers=[1,2,3];

// using forof loop
for(let number of numbers){
    console.log(number);
}

// using foreach loop

numbers.forEach(function(number){
console.log(number);
});
//  another method for the same

numbers.forEach((number,index) => console.log(index,number));
