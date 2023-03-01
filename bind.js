let name={
    firstName:"neha",
    lastName:"Manjunath"
}

let printName=function(a,b){
    console.log(this.firstName+"."+this.lastName+a+b);
}


Function.prototype.myBind=function(...args){
    let obj=this;
    //first ele=>args[0]
    //second element=>args.slice[1]
    const params=args.slice(1);
  return function(args2){
    obj.apply(args[0],[...params,args2])
  }
}

const printmyName=printName.myBind(name,"new","city");
printmyName()














