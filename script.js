/* COUNTDOWN */

function startCountdown(){

    const target = new Date("September 20, 2026 00:00:00").getTime();

    function update(){

        const now = new Date().getTime();
        let distance = target - now;

        if(distance < 0){
            distance = 0;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        const d = document.getElementById("days");
        const h = document.getElementById("hours");
        const m = document.getElementById("minutes");
        const s = document.getElementById("seconds");

        if(d) d.textContent = String(days).padStart(2,"0");
        if(h) h.textContent = String(hours).padStart(2,"0");
        if(m) m.textContent = String(minutes).padStart(2,"0");
        if(s) s.textContent = String(seconds).padStart(2,"0");
    }

    update();
    setInterval(update,1000);
}


/* FINAL SURPRISE */

function revealMessage(){

    const message = document.getElementById("hiddenMessage");
    const button = document.querySelector(".reveal");

    if(message){

        message.style.display = "block";

        if(button){
            button.style.display = "none";
        }
    }
}


document.addEventListener("DOMContentLoaded", function(){

    startCountdown();

});