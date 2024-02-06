var nbr1 = document.querySelector("#nbr_connectionRequests"); 
var nbr2 = document.querySelector("#nbr_yourConnections");

function remove(element1,element2){
    if(element2 == "accept"){
        nbr1.innerText--;
        nbr2.innerText++;
        element1.remove();
    }else{
        nbr1.innerText--;
        element1.remove();
    }
}
function changeName(element){
    element.innerText="Rebecca Alison";
}