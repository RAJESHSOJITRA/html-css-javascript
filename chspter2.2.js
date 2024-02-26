// comparision operator         and logiacl operator
// equal to  ==             equal to & type     ===         it checks the values
//not equal to !=           not equal to &type  !==
let a=5;
let b =10;              //example  d="5" string is 5 than it checks true 

console.log("a == b",a == b);       //if a =b  than true   else flase
console.log("a != b",a != b);  //true     //if not equal !=b  than true   else flase


// strict version for equal to & type ===   
//checks the datatype not comparision of values 
let c=2;
let d=2;        //example  d="2" string is 2 than it result is false 

console.log("c===d",c ===d);     
console.log("c!==d",c !==d);     

let e=5;
let f=8;

console.log("5>8=",e>f);    // 5 is greater than 8 is false
console.log("5<8=",e<f);     // 5 is less than 8 is true

let g=4;
let h=4;
console.log("4>=4",g>=h);   //g is greater than and equal to h is true

let i=6;
let j=8;
console.log("6<=8",i<=j); //i is less than equal to j is true   
console.log("6<=8",j<=i); //j is less than equal to i is false

// logical operatoer        
//logical AND   &&         
            //condition 1 and condition 2 must be true than answer will be true else false
let x=5;
let y=6;

let condition1 =x<y;  //true
let condition2 =x==5;  //true

console.log("condition1 && condition2=",condition1 && condition2)
let condition3 =x<y;  //false
let condition4 =x==6;  //true

console.log("condition3 && condition4=",condition3 && condition4)
// LOGICAL OR  ||       only false and false than  false  else answer is true
let p=15;
let q=10;
let condition5 =p<q;  //false
let condition6 =q==10;  //true

console.log("condition5 || condition6=",condition5 || condition6)

let r=10;
let s=9;
let condition7 =r<s;  //false
let condition8 =r==s;  //false

console.log("condition7|| condition8=",condition7 || condition8)
              
              
//LOGICAL  NOT  !
let A=10;
let B=9;


console.log("!(A<B)",!A<B)              //10<9 is false but  [! not equal] condition  put than it will be true
console.log("!(A>b)", !A>B)              //10>9 is true but  [! not equal] condition  put than it will be false
    
