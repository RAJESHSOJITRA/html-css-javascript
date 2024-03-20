    //          Api Stands for application Programming  interface   
    //               (ex:-that return the data)


//IIFE is a function   Immediately executed as soon as  defined
  // (function)()
  // (async function(){
  //   console.log("getting data1...");
  //   console.log("getting data2...");
  
  // })();

  ///                   Fetch Api
 
  //fetch api provides fecthing(sending/receiving) resouces
  // uses request and response object
const url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#facts");
const btn=document.querySelector("#btn");

// using async & await 
// const getFacts= async()=>{
//   console.log("getting data..."); 
//   let response=await fetch(url);
//   console.log(response);//json format 
//   let   data =await response.json();
//   // console.log(data);
//   factPara.innerText=data[4].text;
// };

//  using promise chain
function getFacts(){
  fetch (url)
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    console.log(data);
    factPara.innerText=data[2].text;
  });
}
btn.addEventListener("click",getFacts);
//  Most popular for AJAX ---> ajaj  asynchronus javascript and xml (json)
//  json is javascript object notation
//  json method

 
//      request & response  (HTTP)


