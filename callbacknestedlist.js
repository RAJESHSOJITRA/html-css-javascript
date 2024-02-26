function async1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("some message sucess");
        },5000);
    });
}
function async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2  ");
            resolve("some message sucess");
        },8000);
    });
}
console.log("fetching data1..... ");
let p1=async1();
p1.then((result)=>{
    console.log(result);
console.log("fetching data2..... ");
console.log(result);

});
// // for(let i=0; i<5;i++){
// //     for(let j=0; j<2;j++){
// //         console.log(j);
// //     }
// // }
// function getData(dataId,getNextData){
   
//     setTimeout(()=>{
//     console.log("data",dataId);
//     if(getNextData){
//         getNextData();
//         console.log("getting Data ");

//     }
//  },2000);   //2secondsdelay
// }
// //data1
// //data2
// //data3
// //callback hell(pyramid of hell or pyramid of doom) 1 call into the another call back
//     getData(1,()=>{ 
//         getData(2 ,()=>{
//             getData(3);
// }) ;
// }) ;


// //PROMISES  //resolve , reject promised resolved  by javascript      
// // let promise=new Promises((resolve,reject)=>{...}) //function with 2 handlers
// // let promise=new Promise((resolve,reject)=>{
// //     console.log(" i am a promise"); 
// //     // resolve("compoleted the task");
// //     reject("try again");
// // })

// //promises
// //.then()[fullfilled]&.catch()[reject]
// const getpromise=()=>{
//    return new Promise((resolve,   reject)=>{
//         console.log("i am promise");
//         resolve("success");
//     });
// };
// let promise=getPromise();
// promise.then(()=>{
//     console.log("promise fullfilled");
// });