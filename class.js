//classes will have  some state(variable)&somebehaviour(function)
class Toyotacar{
    constructor(brand,milege){
        console.log("creating a new object");
        this.brand= brand;
        this.milege=milege;
    }
   
    start(){
        console.log("start");
    }
    stop(){
     console.log("stop");
    }
    // setBrand(brand){
    //     this.brandname=brand;
    // }

}
let fortuner=new Toyotacar("fortuner",10);   //constructor
console.log(fortuner);      // fortuner.setBrand("fortuner");
let lexus =new Toyotacar("lexus",14);     //constructor
console.log(lexus);         // lexus.setBrand("lexus");
let landcruiser=new Toyotacar("landcruiser",12);    //constructor
console.log(landcruiser);       // landcruiser.setBrand("landcruiser");




//       ----------->                      inheritance                 <----------
class Parent{ 
  name(){
    name="rajesh" ;
    console.log(name);
  }  
    hello(){
        console.log("hello");
    }
    work(){
        console.log("do nothing");
    }
}
class Child  extends Parent{}
let obj=new Child();

////            new  example  start     //
class Person{
    constructor(name){
        console.log("enter parent constructor");
     
        this.species="homo sapience";
        this.name=name;
    }
    Eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    constructor(name){
        // console.log("enter child constructor");
        super(name);    // to invoke parent class constructor
        // this.branch=branch;
        // console.log("exit child  constructor");
    }
    work(){
        super.Eat();
        super.sleep();
        console.log("Solve Problem , build Something"); 
    }
}
let engobj=new Engineer("rajesh");

// class Doctor extends Person{
//     work(){
//         console.log("treat patient and give them medecine");
//     }
// }
// let rajobj=new Doctor();