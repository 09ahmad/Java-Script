checkSpeed(75);
function checkSpeed(speed){
    let speedLimit=70;
    let kmPerPoint=5;
    if(speed< speedLimit+kmPerPoint){
        console.log('Ok');
        return;
    }
        const point=Math.floor((speed-speedLimit)/kmPerPoint);
        if(point>12){
            console.log('Lisence Suspended');
        }
        else
        console.log('Points: ',point);
}