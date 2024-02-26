let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#userScore");
const compScorepara=document.querySelector("#comScore");



    const genCompChoice=()=>{
        //rock,paper,scissors
        const option=["rock","paper","scissors"];
        const randomidx=Math.floor(Math.random()*3);
        return option[randomidx];
    };

    const drawGame=()=>{
        // console.log("game was draw");
        msg.innerText="game was Draw  play again";
        msg.style.backgroundColor="blue";


    }

const showWinner =(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`you win  ${userChoice}beats ${compChoice} `;
        msg.style.backgroundColor="green";
    }else{
        comScore++;
        compScorepara.innerText=comScore;
        // console.log("you Lose!");
        msg.innerText=`you Lose ${compChoice}beats ${userChoice}`;
        msg.style.backgroundColor="red";


    }

}
const playGame=(userChoice)=>{
    console.log("userchoice=",userChoice);
    //generate computer choice-->moduler
    const compChoice=genCompChoice();
    console.log("compChoce=",compChoice);

if(userChoice===compChoice){
    //draw game
    drawGame();
}else{
    let userwin=true;
      if(userChoice==="rock"){
        //scissors,paper
       userwin= compChoice==="paper"?false:true;
    }
         else if(userChoice==="paper"){
        //rock,scissors
    userwin=compChoice==="scissors"?false:true;
    }
     else{  
        //rock,paper
       userwin =compChoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");

        playGame(userChoice);
    });
});