// factory function
/*
address=showAddress('a','n','c');
console.log(address);
function showAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    };
}
*/
// constructor function

function showAddress(street,city,zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
}
let address = new showAddress('a','b','c');
console.log(address);