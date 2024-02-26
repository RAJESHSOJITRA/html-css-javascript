//strings
let str="rajesh sojitra";

console.log(str[10]);

let specialstring=`rajesh`;
console.log(typeof specialstring);

//template litterals
let obj={
    item:"pen",
    price:120,

}
let output=`the price of ${obj.item}is a ${obj.price}ruppes`;       //template litterls  for ${obj.item} ,etc.
console.log(output);

console.log("the price of" ,obj.item, "is a" ,obj.price,"rupees");  //this is the string number showing in the line blue color

//NEW LINE for   \n
//TAB  SPACE for \t
console.log("rajesh\n sojitra");

//string lenth
let string ="Hello world";
//string methods in js

console.log(string.toUpperCase());// new value returne the string
console.log(string.toLowerCase());
console.log(string.trim());   // starting and ending white space remove by trim
//string methods in js

console.log(string.slice(1,7))
let string1="rajesh";
let main=string1+string;
console.log(string,string1);


//replace string
let string2="my name is  rajesh";
console.log(string2.replace("na","selfe"))
//charcterat method         charAt(idx)
console.log(string2.charAt(3))

//practice question                                             //for user name using fullname
let fullname=prompt("enter you fullname without space");
let username="@"+fullname+fullname.length;
console.log(username);