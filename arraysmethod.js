//practice question for arrays clstore the companies 
let company=["bloomeberg","microsoft","uber","google","ibm","netflix"];
company.shift();    //remove the first company from the array
company.splice(2,1,"ola")
company.push("amazon");
//array methods


let items=["pen","pencil","bottel"," leptop"];      //arrays
console.log(items);
items.push("chips","charger")
console.log(items);
console.log(items.toString());      //string

let marks=[91,76,91,58,93,];
console.log(marks);
console.log(marks.toString());

//concatination of ,multiple arrays
let marvel_heroes=["iron man","thor", "dr.strange"];
let dc_heroes=["superman","batman","aquaman"];
let indian_heroes=["saktiman","krish","flying jat"];

let heroes=marvel_heroes.concat(dc_heroes,indian_heroes);           // concat() concatination for multiple heroes of arrays in the single arrays
console.log(heroes);

//unshift method        unshift():-add to start   push
let marvel_heroe=["iron man","thor","ant man", "dr.strange"];
let val=marvel_heroe.shift();       //shift for delete item from starting
console.log("deleted ", val);       
marvel_heroe.unshift("ant man, captain america"); //unshift for add from starting
marvel_heroe.shift("ant man,iron man,thor,captain america");
console.log(marvel_heroe.slice(0,3));

//splice for changing the original array

let arr=[10,20,30,40,50,60,70,80, 90];
arr.splice(2,2,100,120);        //9 is for  2th position delete and 2 for 2number used for add  the number
//add element
arr.splice(2,0,1000,1200);
//delete element
arr.splice(5,3,12000,3000,600);
//delete element
arr.splice(0,5)
console.log(arr);
//replace element
arr.splice(1,1,500)
arr.splice(1);// only first index element showing in the array
arr.splice(2,0,100,200,300,400,500,600)
arr.splice(4);   //only 4th index starting from this