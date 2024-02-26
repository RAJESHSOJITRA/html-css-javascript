//function
// function myFunction(msg) {
//     console.log("welcome in the javascript");
//     console.log("my name is rajehs sojitra");
// }
// myFunction();
// keyword     name     parameter  below line
function myFunction(msg){
    //msg is variable and called a parameter -->input
    console.log(msg);

}
myFunction("hello  javascript");    //argument  value pass 

//create a funtion that calculate a 2 number
function sum(a,b){
//    console.log(a+b);
    s=a+b;
    return s;   // return is used for string ,number,array
}
let val=sum(4,7);
console.log(val);

function mul(c,d){
    m=c*d;
    return m;               //if the return is not write in the code than code will not execute and it shows the eror
}
let multi = mul(8,5);  
console.log("multiplication of 8*s is:-",multi);

//arrow function     modern javascript

const arrowsum = (a,b)=>{
    console.log(a+b);
};

const arrowmul=(a,b)=>{
    console.log(a*b);
};


//count vowells practice question
function countvowel(str){
    for(const char of str ){
        console.log(char);
    }
}
function countvowells(str){
    let count=0;
    for(const char of str){
        if( (char==="a") ||
        (char==="e") ||
         (char==="i") ||
         (char==="o") ||
         (char==="u")
        )
        {
        count++;
        }
    }
    console.log(count);
    return count;
}

const countvow =(str) =>{let count=0;
    for(const char of str){
        if( (char==="a") ||
        (char==="e") ||
         (char==="i") ||
         (char==="o") ||
         (char==="u")
        )
        {
        count++;
        }
    }
    console.log(count);
    return count;

}

//call back function passed as a argumnet to another function
//csallback function:-execute for each element in the array
function abc(){
    console.log("abc");
}

function myFunc(_num){
    return abc;

}
let arr=["pune","ahmedabad","mumbai","banglore"];
arr.forEach(function printvalue(val,idx,arr){   //value at each index
    console.log(val.toUpperCase(),idx,arr);

});

let num=[2,3,4,5];
num.forEach((num) => {
    console.log(num*num);   //num**2
});

let square=[20,10,20,30,30,40,50,50,];
square.forEach((square) =>{

    console.log("sqare of this  number=",square,"=",square*square);
});


//map method used for create a new array
let  nums=[20,50,70,30,40,52];
let newarr=nums.map((val)=>{
    console.log(val*val);
    return val;
});
console.log(newarr);
let calsquare=(num) =>{
    console.log(num*num);
};

//filter method  that create a true for a condition/        filter function 
let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let evenarray=array.filter((val)=>{
    return (val%2==0);          //(val%2!=0);   for odd number
});
console.log(evenarray);

//reduce method

let calculate=[8,9];
let output=calculate.reduce((result,current)=>{
    return result+current;
});
console.log(output);

let largest=[20,1,25,6,8,];
let largnumber=largest.reduce((previous,current)=>{
    return previous<current?current:previous;
});
//toppers array marks filter
let marks=[60,92,70,65,60,90,,93,72];
let toppers=marks.filter((val)=>{
    return val>90;
    
}) 
console.log(toppers);

//create a array number from 1 to n;

// let n=prompt("enter a number ");
// let arrr=[];
// for(let i=1; i<=n; i++){
//     arrr[i-1]=i;   //1(0),2(1),3(2),4(3),5(4),6(5),7,8,9,                       //number and index

// }

// console.log(arrr);

// let n=prompt("enter a any number for array");
// let arrr=[];
// for(let i=1;i<=n;i++){
//     arrr[i-1]=i;
// }
// console.log(arrr);

//for a  n number of a input make an array
// let n=prompt("enter  n  number");
// let ar=[];
// for(let i=1;i<=n;i++){
//     ar[i-1]=i;
// }
//  console.log(ar);
//  let summ=ar.reduce((result,current)=>{


//     return result+current;
//  })
//  console.log(summ);

 let n=prompt("number");
 let ar=[];
 for (let i=1;i<=n;i++){
    ar[i-1]=i;
 }
 console.log(ar);
 let summ=ar.reduce((result,current)=>{
    return result+current;
 })
 console.log(summ);