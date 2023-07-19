let text=document.getElementById('text');
let h1=document.getElementsByTagName('h1');
let box=document.getElementsByClassName('box');
let h4=document.getElementsByTagName('h4');

function call(){
    console.log(text.innerText);
    console.log(h1[0].innerText);
    console.log(box[0].innerText);
    h1[1].innerText="Hello World";
    console.log(h1[1].innerHTML);
    h1[2].style.color="red";
}
function time(){
    let date=new Date();
    let hrs =date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    if(hrs>12){
        hrs=hrs-12;
    }
    let t=hrs+" : "+min+" : "+sec;
    h1[3].innerText=t;
}
setInterval(()=>{
    time();
},1000)

function replace(){
    h4[0].innerText="Welcome to Elevation academy";
    console.log(h4[0].innerText);
}

let container=document.querySelector('.container');
let btn=document.querySelector('.change');
let c=0;
btn.addEventListener('click',() =>{
    if(c%2===0){
        container.setAttribute('style','flex-direction:column');
        c++;
    }
    else{
        container.setAttribute('style','flex-direction:row');
        c++;
    }
})
