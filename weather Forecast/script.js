function message(){
    alert("Loading weather report...");
}
function dismiss(element){
    element.remove();
}
var temp =[
    document.querySelector("#temp1"),
    document.querySelector("#temp2"),
    document.querySelector("#temp3"),
    document.querySelector("#temp4"),
    document.querySelector("#temp5"),
    document.querySelector("#temp6"),
    document.querySelector("#temp7"),
    document.querySelector("#temp8"),
];
var F = ["65°","75°","66°","80°","61°","69°","70°","78°"];
var C = ["24°","18°","27°","19°","21°","16°","26°","21°"];
function switchTemperature(element){
    var x = element.value;
    console.log(x);
    if (x == "°C"){
        for (i=0;i<9 ;i++){
            temp[i].innerText = C[i];
        }
    }
    else{
        for (i=0;i<9;i++){
            temp[i].innerText = F[i];
        }
    }
}



