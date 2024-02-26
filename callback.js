//Synchronous Programming
console.log("one");
console.log("two");

//asynchrounous programming :-all execution done and only settime out will be output after second ends
console.log("three");
function hello(){
    console.log("hello");
}
setTimeout(hello,2000)  //2s=2000ms
function byy(){
    console.log("byy");
}
setTimeout(byy,2000);

console.log("four");
console.log("five");

//call back is passed function an argument to another function
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b ,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,(a,b)=>{
    console.log(a+b);
});
function mul(c,d){
    console.log(c*d);
    
}
calculator(3,4,(c,d)=>{
console.log(c*d);
});
let age=19;
if(age>=18){
    if(age>60){
        console.log("senior");
    }
    else{
        console.log("middle" );
    }}
    
    else{
        console.log("child")
    }
