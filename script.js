let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const mmm=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("draw");
    mmm.innerText="game draw.";
    mmm.style.backgroundColor= "blue";
}

const showWinner = (userWin,userchoice,compchoice) =>{
    if(userWin){
        console.log("youwin");
        userScore++;
        userScorePara.innerText=userScore;
        mmm.innerText=`you win! your ${userchoice} beats ${compchoice}`
        mmm.style.backgroundColor= "green";
    }
    else{
        console.log("you lose");
        compScore++;
        compScorePara.innerText=compScore;
        mmm.innerText=`you lose!  ${compchoice} beats your ${userchoice}`;
        mmm.style.backgroundColor= "black";
    }

}

const playgame=(userchoice)=>{ 
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if(compchoice===userchoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userWin = compchoice === "scissor" ? false : true;
        }else{
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
        
    }
    

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
       

