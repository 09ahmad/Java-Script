function Circle(radius){
    this.radius=radius;
    this.draw=function(){
     console.log('draw');
    }
}
const Circle1=new Function('radius',`
this.radius=radius;
this.draw=function(){
console.log('draw');
}
`)
const circle=Circle1(1);
console.log(circle);
const another =new Circle(1);
console.log(another);