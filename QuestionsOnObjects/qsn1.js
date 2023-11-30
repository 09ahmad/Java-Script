// function showAddress(address){
    // this.street=street;
    // this.city=city;
    // this.zipcode=zipcode;
    // }
    //     const address=new showAddress();
    //     console.log(address);
    
    let address={
        street:'a',
        city:'b',
        zipCode:'c'
    };
    function showAddress(address){
        for(let key in address){
            console.log(key,address[key]);
        }
    }
    showAddress(address);
    