// //get attribute
// let div=document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");            //div tage we used output showing the id that is box
// console.log(id);
 
// let name =div.getAttribute("name");         //output showing  the name  that is rajesh 
// console.log(name);

// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));
// // set attribute
// let paragraph=document.querySelector("p");
// console.log(paragraph.setAttribute("class","newclass"));

// let div1=document.querySelector("div");
// console.log(div1);

                                                                            // //css in the js
                                // div.style.backgroundColor= "red";
                                // div.style.backgroundColor= "orange";
                                // div.style.fontSize="30px";   


let newbtn=document.createElement("button");
newbtn.innerText="click me";
console.log(newbtn);
//append for add element in the last
let divv=document.querySelector("div");
divv.append(newbtn);
//prepend for add element in the first
let newbttn=document.createElement("button");
newbttn.innerText="click me";
console.log(newbttn);

let divvv=document.querySelector("div");                // node is div  // we can take node as p,h1,h2,h3,h4,h5,h6 etc
divvv.prepend(newbttn);             //prepend used for  startof the node   (inside)    
// divvv.before(newbttn);   // for before replace with prepend (outside)
divvv.after(newbttn);       // for after  node  (outside)


//add the text in the starting 
let newheading=document.createElement("h1");
newheading.innerHTML="<i>hello rajesh </i>";
document.querySelector("body").prepend(newheading);

//for remove the node   removing the paragraph
let p=document.querySelector("p");
p.remove();

// newheading.remove();             /for  removing the heading
