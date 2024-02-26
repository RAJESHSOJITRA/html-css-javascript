clel// create toggle button tochange the  theame to dark mode& light mode
// let modebtn=document.querySelector("#mode");
// let currmode="light";
//     modebtn.addEventListener("click",()=>{
//         if(currmode==="light"){
//             currmode="dark";
//         }else{
//             currmode="light";
//         }
//         console.log(currmode)    });

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light";
modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
       
        document.querySelector("body").style.backgroundColor="black";   //css in js
    }
        else{
            currmode="light";
            document.querySelector("body").style.backgroundColor="white";
           
        }
    console.log(currmode);

});
