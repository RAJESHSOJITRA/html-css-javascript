// print 1 to 100 of even number
// for(let num=1; num<=100;num++)
// {
//     if(num%2===0){
//       //even number 
//         console.log(num);

//  }
// }
let gamenum=100;

let usernum = prompt("guess the number");

while(usernum!=gamenum)
{
    usernum=prompt("you enterd the wrong number");
}
console.log("you enterd the right number");


