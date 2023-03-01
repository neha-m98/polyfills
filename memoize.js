
// Function memoized takes another function foo
// cache is just an empty Javascipt Object
// We are returning another function that will serve as memoized function
// args is a parameter that handles the arguments of original function
// Rest operator(…) allows us to accept infinite parameters i.e a , b in multiply function
// We create a unique id combining all parameters
// We check if that key has a value in cache object. If yes we return the value
// Else we call original function with all arguments
// Store the returned value in Cache and return the value.
// Since we have created a closure, we can access cache object even after function has returned. Let’s do the magic,
function myMemoize(foo){
  var cache={}
  //take 
  return function(...args){
      var id=args.toString();
      if(cache[id]){
        return cache[id];
      }
      else{
        var value=foo(...args)
        cache[id]=value;
        return value;
      }
  }
}


const computed=(num1,num2)=>{
    for(let i=1;i<1000000;i++){
        return num1*num2;
    }
}

const memoizedCompute=myMemoize(computed);
console.time("first")
console.log(computed(1678,9088))
console.time("second")
console.log(computed(1678,9088))