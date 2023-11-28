//Divisible by 3=>Fizz
// divisible by 5 => buzz
// DIvisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 =>Input
// Not a number =>'Not a number'
const output =fizbuzz(15);
console.log(output);
function fizbuzz(input){
 if(input % 3===0 && input % 5===0 ){
        return 'FizzBuzz';
    }
    else if(input%3===0){
        return 'Fizz';
    }
    else if(input % 5===0){
        return 'Buzzz';
    }
   
    else if(input%3!=0 && input %5!=0){
        return input;
    }
    else return NaN;
}