//DOM FULL NAME IS Document Object Model
//dynamic changes in our webpage 
//using a dom we can access javascript from the html filex1(html-->javascript)
console.dir(document.body);
console.log(document.body);
console.log(document.body);
console.dir(document.body);
console.dir(document.body);     //document used for html file
//DOM manupulation
//selecting with ID
let headingid=document.getElementById("headingid");
console.dir(headingid);                          //using dir(console.dir)   //using log
                 
//selecting with class  
//html collection  returned by class
let heading=document.getElementsByClassName("headingclass");
console.log(heading);
console.dir(heading);
//selecting with tagname
let tage=document.getElementsByTagName("p");
console.log(tage);
console.dir(tage);  



//////     QUERY  SELECTOR  (class / id/ tage)              //ELEMENT ACCESS
let element=document.querySelector("p");        //1st  element return by the query selector
console.dir(element);   

let allelements=document.querySelectorAll("p");     //ALL Elements return by the query selector  
console.dir(allelements);                          //it returnes node list (each individual item)

//query selector using  class
let queryclass=document.querySelectorAll(".myclass");
console.dir(queryclass);
//query selector using id
let queryid=document.querySelectorAll("#myid");
console.dir(queryid);

//DOM MANUPULATION PROPERTIES
//get /set/change/update
console.dir(document.body.firstchild); 

let div=document.querySelector("div");
console.dir(div);

let header=document.querySelector("h1");
console.dir(header);

//append the practice questio for  hello javascript from apna college student       //practice question 6:44:00
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "  from apna college student";        // 2 String concate here
console.dir(h2.innerText);

//create 3 div with same common class name - "box" and acces them
// let divs=document.querySelectorAll(".box");
// console.dir(divs[0]);      
// divs[0].innerText="my first box for dom change the value";
// divs[1].innerText="my second box for dom";
// divs[2].innerText="my third box and change the value and text element";



//create 3 div with same common class name - "box" and acces them
//using a FOR OF loop
let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}

// using simple method
// let divs=document.querySelectorAll(".box");
// console.dir(divs[0]);

// divs[0].innerText="my first box  for dom ";
// divs[1].innerText="second box change the text";
// divs[2].innerText="third boxes";

// let divs=document.querySelectorAll(".box");
// let idx=1;
// for (div of divs){
//     div.innerText=`new text for divs ${idx}`;
//     idx++;
// }





///////////////////////////             DOM   PART 2            ////////////////////////////////////////////////


