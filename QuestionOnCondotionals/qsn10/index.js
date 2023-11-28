showStar(5)
function showStar(rows){
    for(let row=1;row<=rows;row++){
        let pattern='';
        for(let i=1;i<=row;i++)
            pattern+='*';
            console.log(pattern);
    }
}