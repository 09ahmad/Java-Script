
let post=new Post('a','b','c');
console.log(post);

function Post(title,body,auther){
    this.title=title;
    this.body=body;
    this.auther=auther;
    this.views=0;
    this.comments=[];
    this.isLive=false;
} 
