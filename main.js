let computerNum = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let resultArea = document.getElementById("result-area");
let userInput = document.getElementById("user-input");
let chanceArea = document.getElementById("chance-area");
let chances= 5;
let gameOver = false;
let history=[];


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){userInput.value=""})

function randomPickNum(){
   computerNum = Math.floor(Math.random()*100)+1;
   console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;

    if(userValue < 1 || userValue >100){
       resultArea.textContent = "범위에 벗어난 숫자입니다! 다시 입력해주세요!"
       return;
    }
    if(history.includes(userValue)){
       resultArea.textContent = "동일한 숫자입니다! 다시 입력해주세요!"
       userInput.value="";
       return;
    }
    chances--;
    chanceArea.textContent = `남은 기회:${chances}번`
    console.log("기회는", chances);

    if(userValue < computerNum){
    resultArea.textContent = "Down!!"
    }
    else if(userValue > computerNum){
    resultArea.textContent = "Up!!"
    }
    else{
        resultArea.textContent = "와우 맞추셨네요!"
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances<1){
        gameOver = true;
    }

    if(gameOver==true){
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    resultArea.textContent = "다시 맞추기 게임 시작!"
    randomPickNum();
    chances.value = 5;
}


randomPickNum();