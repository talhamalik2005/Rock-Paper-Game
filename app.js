let userscore=0;
let  compscore=0;

const msg = document.querySelector('#msg')
const choices=document.querySelectorAll(".choice")

const genCompChoise=()=>
{ //rock,paper,scissors
    const  option =["rock","paper","scissor"]
 const randIdx=Math.floor (  Math.random()*3);
 return option[randIdx]
}

const showwinner=()=>{
    if(userWin==true)
    {
         msg.style.color ="green"
        msg.innerText ="You Win (*_^)"
       
    }
    else{
        msg.style.color ="red"
        msg.innerText ="You Loose (*:_:*)"
    }
}

const drawgame=()=>
{
     msg.innerText ="Match Draw"
}


const playgame =(userchoice)=>{
    console.log("user choise is = ",userchoice)
 const compchoise = genCompChoise();
 if(userchoice===compchoise)
 {
    drawgame();
 }
 else{
    let userWin =true;
    if(userchoice==="rock"){
        userWin = compchoise === "paper" ? false : true
    }

    else if(userchoice==="paper")
    {
        userWin= compchoise==="scissor" ? false : true;
        
    }
    else{
        userWin=compchoise==="rock" ? false : true
    }
    showwinner(userWin);
 }
}

choices.forEach((choise)=>
{
//  console.log(choise);
 choise.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");

    console.log("choise was clicked")
    playgame(userchoice);
 })
})