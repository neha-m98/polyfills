function addsum(a,b){
  this.a=a;
  this.b=b;

  console.log(this.a+this.b);
}

addsum.prototype.assignA=function(a){
    this.a=a;
    console.log(this.a+this.b);
}

addsum.prototype.assignB=(b)=>{
    this.b=b;
    console.log(this.a+this.b);
}

const a=new addsum(10,10);
a.assignA(20);
a.assignB(30)