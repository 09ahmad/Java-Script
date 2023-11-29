const circle={
    radius:1
};
circle.colour='yellow';
circle.draw=function(){};
delete circle.draw;
delete circle.colour;
console.log(circle);