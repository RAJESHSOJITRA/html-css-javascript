// change of an object is known as a event(button,form-signup)
//mouse ,keyboard event       15%  low battery for showing an notification
   

let box=document.querySelector("#btn1");
// box.onclick=()=>{
//     console.log("handler1");

// } ;
// //  event object is e
// box.onclick=(e)=>{
//     console.log(e);
    // console.log(e.type);                         //mostly used 
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);

//     console.log("handler2");

// } ;
//event listeners
box.addEventListener("click",(e)=> {
    console.log("button 1 was clicked");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
});
box.addEventListener("click",(e)=> {
    console.log("button 2 was clicked");

});
box.addEventListener("click",()=> {
    console.log("button 3 was clicked");
});
box.addEventListener("click",()=> {
    console.log("button 4 was clicked");
});
let div =document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you after inside the div");

// }


