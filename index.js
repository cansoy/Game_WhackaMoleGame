window.addEventListener("DOMContentLoaded",()=>{
let gameSection=document.querySelector("#gameSection");
let countDownTimer=document.querySelector("#time");
let counterHit=document.querySelector("#result");
let hitDivID;
let hitMoleID;
let timer=60;
let counter=0;

for (let a=1;a<10;a++){
        let idPrefix="div";
        let div=document.createElement("div");
        div.setAttribute("data-id",a);
        div.setAttribute("id",idPrefix+a);
        div.setAttribute("class","mole");
        gameSection.appendChild(div);
        div.addEventListener("click",()=>{
        hitDivID=div.getAttribute("class");
        })
}

function randomCreateMole(){
    let randomNumber=Math.floor(Math.random()*9);
    let gameSectionDiv=document.querySelectorAll(".mole")[randomNumber]
    let picMole=document.createElement("div");
    picMole.setAttribute("id","mole");
    picMole.setAttribute("class","mole");
    gameSectionDiv.appendChild(picMole);
    picMole.innerHTML="It is Mole !!!"
    picMole.addEventListener("click",()=>{
        hitMoleID=picMole.getAttribute("id");
        if (hitMoleID==hitDivID){
            counter+=1;
            counterHit.innerHTML=counter;
            if(timer<0){
                counter-=1;
                counterHit.innerHTML=counter;
            }
        }
    }) 
    setTimeout(function(){
       picMole.innerHTML=""
       picMole.remove();  
    },1000) 
}
setInterval(randomCreateMole,2000);

function countDown(){
    timer=timer-1;
    countDownTimer.innerHTML=timer;
    if(timer<0){
       countDownTimer.innerHTML=0;
    }
}
setInterval(countDown,1000);
})
