// data types in js                                             //new type starting 57:00
// number,strig,boolean,undefined,null,    [bigint,symbol less used datatypes]
// primitive 7types    and nonprimitive objects
let age=24;
let price=100;
let fullName="rajesh";

isFollow=true;
 
let y=BigInt(1239898);
let z=Symbol("rajesh");
console.log(y);
console.log(z);

// student is object it is collection of differnt variable

let student={
    name:"rajesh sojitra",
    age:21,
    cgpa:7.66,
    isPAss:true,
}
console.log(student.name);

// student is object it is collection of differnt variable
let student2={
    name:"harshpatel",
    age:22,
    cgpa:8,
   ispass:true
}
console.log(student2);
console.log(student.cgpa);
console.log(student2["age"]);

let student3={
    name:"anadi patel",
    age:21,
    cgpa:10,
    ispass:true,
}
const product={
    titel:"ballpen",
    rating:5,
    offer:10,
    price:270,

}
console.log(product.price);
console.log(product.titel);
console.log(product.offer);

const info={
    username:"@rajeshsojitra",
    follwer:535,
    follwing:490,
    isFollow:true,
}
console.log(info.follwer);