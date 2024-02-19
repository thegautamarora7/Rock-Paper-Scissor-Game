let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const generateCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    
    // floor will actually remove all the decimal values
    // random generates value between 0 and 1 but multiplying with 3 will modify the values and its range becomes 0-2
    // rock, paper, scissor genration for computer
    const randomIdx = Math.floor(Math.random()*3); 
    return options[randomIdx];
};

const drawGame = ()=>{
    console.log("Draw Game");
    msg.innerText = "The game was draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText=userScore;

    }
    else{
        msg.innerText = `You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}

const playGame = (userChoice)=>{
    console.log("User choice : ", userChoice);
    // Generate computer choice -> modular way (dividing tasks in functions)
    const compChoice = generateCompChoice();
    console.log("comp choice : ",compChoice);

    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice ==="paper"){
            // rock, scissors
            userWin = compChoice ==="scissor" ? false : true;
        }
        else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
  });