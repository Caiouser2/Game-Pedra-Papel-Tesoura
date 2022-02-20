let playerOptions = document.querySelectorAll('.player-options div > img'); 
let adversaryOptions = document.querySelectorAll(".adversary-options img");
let playerChoose = "";
let adversaryChoose = "";

function choosePlayer(t) {
    playerChoose = t.target.getAttribute("choose");

    resetOpacityPlayer();
    adversary();

    t.target.style.opacity = 1;
}

for(let i = 0; i < playerOptions.length; i++) {
    playerOptions[i].addEventListener('click',choosePlayer);
}

function resetOpacityPlayer() {
    for(let i = 0; i < playerOptions.length; i++){
        playerOptions[i].style.opacity = 0.3;
    } 
}

function adversary() {
    resetAdversary();

    let rand = Math.floor(Math.random()*3);

    for(let i = 0; i < adversaryOptions.length; i++){
        if(i == rand){

            adversaryOptions[i].style.opacity = 1;
            
            adversaryChoose = adversaryOptions[i].getAttribute('chooseA');
        }
    }
    champion();
}

function resetAdversary() {
    for(let i = 0; i < adversaryOptions.length; i++){
        adversaryOptions[i].style.opacity = 0.3;
    }
}

function champion() {
    let winner = document.querySelector(".winner");
    
    if(playerChoose == "paper"){
        if(adversaryChoose == "paper"){
            winner.innerHTML = "EMPATE";

        }else if(adversaryChoose == "scissor"){
            winner.innerHTML = "VOCÊ PERDEU";

        }else if(adversaryChoose == "rock"){
           winner.innerHTML = "VOCÊ GANHOU";
        }
    }

    if(playerChoose == "rock"){
        if(adversaryChoose == "paper"){
            winner.innerHTML = "VOCÊ PERDEU";

        }else if(adversaryChoose == "scissor"){
            winner.innerHTML = "VOCÊ GANHOU";

        }else if(adversaryChoose == "rock"){
            winner.innerHTML = "EMPATE";
        }
    }

    if(playerChoose == "scissor"){
        if(adversaryChoose == "paper"){
            winner.innerHTML = "VOCÊ GANHOU";

        }else if(adversaryChoose == "scissor"){
            winner.innerHTML = "EMPATE";

        }else if(adversaryChoose == "rock"){
            winner.innerHTML = "VOCÊ PERDEU";
        }
    }
}
