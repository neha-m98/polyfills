function myPromise(excecutor){
    var onResolve;
    var onReject;
    var isFullfilled=false;
    var isRejected=false;
    var isCalled=false;
    var value;


    function resolve(val){
        isFullfilled=true;
        value=value;
        if((typeof onResolve=='function')){
            onResolve(val);
            isCalled=true;
        }
    }

    function reject(err){
        isRejected=true;
        value=err;
        if((typeof onReject)=='function'){
            onReject(err);
            isCalled=true;
        }
    }

    this.then=function(thenHandler){
        onResolve=thenHandler;
        if(isFullfilled && !isCalled){
            isCalled=true;
            onResolve(value);
        }
        return this;
    }

    this.catch=function(catchHandler){
        onReject=catchHandler;
        if(isRejected && !isCalled){
            onReject(value);
            isCalled(true)
        }
        return this;
    }

    
excecutor(resolve,reject);
}



const mynewPromise=new myPromise((resolve,reject)=>{
    setTimeout(()=>{
       reject(2);
    },2000)
})

mynewPromise.then((res)=>console.log(res)).catch((err)=>console.log(err))