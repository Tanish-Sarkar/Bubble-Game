var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makebubble() {
    var clutter = "";

    for (var i = 1; i <= 85; i++) {
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".panel-bottom").innerHTML = clutter;
}

function runtimer(){
    var timerint = setInterval(function () {
       if (timer > 0) {
        timer--;
        document.querySelector("#timerval").textContent = timer;
       }
       else{
        clearInterval(timerint);
        var last = document.querySelector(".panel-bottom").innerHTML = `<h1>GAME OVER...</h1> <h1>SCORE : ${score}</h1>`;
       } 
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector(".panel-bottom").addEventListener("click", function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if (clickedNumber === hitrn) {
        increaseScore();
        makebubble();
        getNewHit();
    }
})


getNewHit();
runtimer();
makebubble();