// map creates a new array from the existing one

Array.map((num,i,arr)=>{})

Array.prototype.myMap=function(cb){
    let result=[];
    for(let i=0;i<this.length;i++){
       result.push(cb(this[i],i,this));
    }
    return result;
}

const nums=[1,2,3,4];
const multiplyThree=nums.myMap((num,i,arr)=>{
    return num*3;
}
)
