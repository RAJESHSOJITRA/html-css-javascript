//arrays  shows the index and string length

// let marks={
//     stu1:97, 
//     stu2:90,
//     stu3:80,
//     stu4:85,
// }
// console.log(marks);

let mark=[98,94,100,80,85];
console.log(mark);

let heroes=["ironman","thor","spiderman","hulk","dr.strange"];  
console.log(heroes);


for(let idx=0; idx<heroes.length;idx++)                             //for loop  used
{
    console.log(heroes[idx]);
}
for(let hero of heroes){                                               //for   of loop used
    console.log(hero);
}

let cities=["delhi","ahmedabad","mumbai","pune ","banglore"];
console.log(cities);


for (let idx=0;  idx<cities.length; idx++){
    console.log(cities[idx]);
}

//practice question 1

// let marks=[58,87,34,87,79];

// sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
// sum=sum/5;

// console.log(sum);

let marks = [58,87,34,87,79];
let sum=0;
for(let val of marks){
    sum +=val;
}
let avg=sum/marks.length;
console.log(`average marks of the class= ${avg}`);

//practicr question 2

let items=[600,323,540,250,920,420];
//  for of loop
let idx=0;
for(let val of items){
    console.log(`the value of the items ${idx}= ${val}`);
    let offer =val/10;
    items[idx]=items[idx]-offer;
    console.log(`the value after the offer = ${items[idx]}`);
    idx++;
}

//for loop
for(let i=0;i<items.length;i++){
    let offer= items[i]/10;

    items[i]-=offer;

    console.log(items[i]);
}
