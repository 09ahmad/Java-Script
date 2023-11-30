function Circle(radius){
    this.radius=radius;

    this.draw=function(){
        console.log('draw');
    }
}
const circle=new Circle(1);
console.log(circle);

let x={};// measns => let x=new Object()
new String();  // '',"",``
new Boolean(); // true,false;
new Number();//1,2,3,4....
