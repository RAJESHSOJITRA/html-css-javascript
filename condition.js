//conditional statement                                     2 OPERANDS  A+B     1OPERAND  A++,  A--
// IF statement                                              3 OPERAND   A? B:C
let age=18;

if(age>=18){
    console.log("you are eligeble for voting");

}
else{
    console.log("you are not eligible for voting");
}

// let mode=dark;
// let color;

// if(mode===dark){
//     color="dark";
// }
// if(mode=light){
//     color="white";
// }
// console.log(dark);


// IF ELSE statement
let a=21;

if(a>18)
{    
    console.log("you can vote");
}
else{
   console.log("you can not vote");
}

/// odd or  even number find out
let num=48;

//check the divide by 2  and remender 0 than it will be even number
//sytax rules   statement end semilcolon
//        if than put condition 
if(num%2==0){
    console.log(num,"even number");
}
else{
    console.log(num,"odd number");
}




// else if statement
//  1st  check if condition 
//  2nd  check  else if condition
// than last or 3rd check else  condtion 

let AGE=19;

if(AGE<18){
    console.log("junior");

}
else if(AGE>60){
    console.log("senior");
}
else{
    console.log("middle age")
}

//another example of else if statment
let mode="dark";
let color;

if(mode==="dark"){
    color="black";
}
else if(mode==="blue"){
    color="blue";
}
else if(mode==="green"){
    color="green";
}
else{
    color="white";
}
console.log(color);

//if(mode==="dark") console.log(mode);          // SINGLE LINE OUTPUT  only for example

//ternery operator  is  a special operator          it is simpler  and compact for if-else
 
let ages =32;

let result=ages>=18? "adualt": "not adualt";
console.log(result);
    
prompt("Feedback");     // in a prompt we can input the feedback

alert("notification");      //in a alert only showing the notification