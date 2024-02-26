//async & await(to wait ) function
    // any function can we take async function
    
    // async    function hello(){
    //     console.log("hello");
    // }
// await pause the exection of surrounded async function
// function api(){
//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//      console.log("wheather data");
//    resolve(200);
//     },2000);
// });
// }
// async function getWeatherData(){
//     await api();
// }


function getData(dataId){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",datId);
            resolve("sucess");
        },2000);
    });
}
//async Await

async function GetallData(){
    console.log("getting data 1");
    await GetData(1);
    console.log("getting data 2");
     await GetData(2);
    console.log("getting data 3");
    await GetData(3);


    
}