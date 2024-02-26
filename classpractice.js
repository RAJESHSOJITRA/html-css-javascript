//creating  a website for your college  -->user with 2 propertiese  name &email viewdata() 
//viewdata() allows user to  view website data
let data="secret information";
class User{
    constructor(name,email){
            this.name =name;
            this.email=email;
    }
    viewData(){
        console.log("view data",data);
    }
}
// let student1=new User("rajesh","rajesh@gmail.com");
// let student2=new User("harsh","harsh@gamil.com");

// let teacher1 = new User("dean","dean@college.com");
 
//          create a new class admin that inherits from user
//  add  new method called editData to admin that allows  edit website data
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
        editData(){
            DATA="Some new value";
        }
}
let admin1 =new Admin("admin","admin@email.com");
let admin2=new Admin("rajesh","rajesh@gmial.com");

let a =5;
let b=10;
console.log(a+b);