var scoreNinjas = document.querySelector("#ninjasScore");
var scorePirates = document.querySelector("#piratesScore");

function addone(team){
    if(team=="toNinja"){
        scoreNinjas.innerText++;
    }else{
        scorePirates.innerText++;
    }
}
function remove(x){
    x.remove();
}
function gameOver(){
    alert("The Ninjas have won!");
}
setTimeout(gameOver, 13000);