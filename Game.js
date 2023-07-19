let randomNo=Math.floor(Math.random()*100);
let No=document.getElementById('guess');
let msg=document.querySelector('.msg');
let score=document.querySelector('.score');
let hscore=document.querySelector('.highscore')
let num=document.querySelector('.No');
function check(){
    score.innerText-=1;
    if(randomNo>parseInt(No.value)){
        msg.innerText="Your Guess Is Low";
    }
    else if(randomNo<parseInt(No.value)){
        msg.innerText="Your Guess Is High";
    }
    else if(randomno===parseInt(No.value)){
        msg.style.fontSize="30px";
        msg.innerText="🤩🤩 Hurray You Won 🤩🤩";
        document.body.style.backgroundColor = "rgb(71, 186, 140)";
        hscore.innerText=score.innerText;
        num.innerText=No.value;
    }
}

function playagain(){
    randomno=Math.floor(Math.random()*100);
    msg.innerText="Start guessing...";
    hscore=0;
    score.innerText=100;
    document.getElementById('guess').value="";
    num.innerText="?";
    document.body.style.backgroundColor = "rgb(20,104,104)";
}