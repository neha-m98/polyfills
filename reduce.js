

Array.prototype.myReduce=function(cb,initialValue){
  var accumulator=initialValue;
  for(let i=0;i<this.length;i++){
    if(accumulator){
      accumulator = cb(accumulator,this[i],i,this)
    }
    else
   accumulator= this[i]
  }
  return accumulator;
}


const nums=[1,2,3,4];
const sum=nums.myReduce((acc,curr,i,arr)=>{
    return acc+curr;
},0)

console.log(sum);