// 2:20:00 minutes
// alert("notification");      //in a alert only showing the notification

// let number=prompt("Enter a number");       // in a prompt we can input the feedback
// if(number%5===0){
//     console.log(number,"number is multiple of 5");
// }
// else{
//     console.log(number,"number is not multiple of 5");
// }

let score= prompt("enter a number");
let scrore=100;

if(score>=80 && score<=100){
    console.log("A Grade");
}
else if(score>=70 && score<=79){
    console.log("B Grade");
}
else if(score>=60 && score<=69){
    console.log("c Grade");
}
else if(score>=50 && score<=59){
    console.log("D Grade");
}
else{
    console.log("you are failed");
}