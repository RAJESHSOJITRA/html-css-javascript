//javascript object some state and behaviour(properties& method)
//prototype is  by default object   prototype(properties &method)

//we can set prototype :   __proto__
//prototype is refernce of an object
const student={
    name:"rajesh",
    age:21,
    college:"kitrc",
    marks:90,
    printMarks:function(){
karanarjun.__proto__=emoloyee;

        console.log(`hello rajesh your marks is ${marks} out of 100`);
    },
};
const employee={
    calctax() {
        console.log("calculate tax to 10%");
    },
}
const karanarjun={
    salary:50000,
    calctax(){
        console.log("calculated tax is 20%");
    }

};
const karanarjun2={
    salary:50000,

};
karanarjun.__proto__=employee;
karanarjun2.__proto__=employee;

