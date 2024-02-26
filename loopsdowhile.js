//for of loop for array and string
// let a=1;
// do{
 
//     console.log(a);
//         a++;
// }
// while(a<=10);

// let str="rajesh";
// let size=0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log(size);

                                                                    //syntax of for of loop
                                                                    //for(let variable of str variable )
let str="sojitra";
let num=0;
for(let val of str){
    console.log("val=",val);
    num++;
}
console.log(num);

// for in loop 
let student={
    name:"rajesh sojitra",
    age:21,
    cgpa:7.66,
    address:"ahmedabad",
};
for (let  i in student){
    console.log(i,student[i]);
}
