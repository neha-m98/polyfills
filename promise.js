//polyfill

function myPromise(excecutor){
     let onResolve,
     onReject,
     isFullfilled=false,
     isCalled=false,
     
     value;

     function resolve(val){
        isFullfilled(true);
        value=val;

        if(typeof onResolve==='function'){
            onResolve(value);
            isCalled=true;
        }
     }

     function reject(value){
        isRejected=true;
        value=val;

        if(typeof onReject==='function'){
        onReject(value);
        isCalled=true;
        }
     }

    this.then=function(callback){


        if(isFullfilled && !isCalled){
            isCalled=true;
            onResolve=callback;
        }
       
        return this;
    }

    this.catch=function(callback){
        if(isFullfilled && !isCalled){
            isCalled=true;
            onReject=callback;
        }
       
        return this;
    }
 try{
    excecutor(resolve,reject)
 }
 catch(error){
   reject(error)
 }
    
}

const examplePromise=new myPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2)
    },1000)
})


examplePromise.then((res)=>console.log(res)).catch(err=>console.log(err));