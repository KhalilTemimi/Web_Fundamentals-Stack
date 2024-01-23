
function alwaysHungry(arr) {
    var x =0;
    for(i=0; i<arr.length ; i++){
        if(arr[i]=="food"){
            x +=1;
            console.log("yummy");
        }}
        if(x==0){
            console.log("I'm hungry");
        }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

//**_____________________________________________________**//

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//**____________________________________________________ **//

function betterThanAverage(arr) {
    var sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }
    var count = 0
    for(i=0; i<arr.length; i++){
        if(arr[i]>(sum/arr.length)){
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//**_____________________________________________________**//

function reverse(arr) {
    var indexStart = 0;
    var indexEnd = arr.length-1;
    while(indexStart<indexEnd){
        x = arr[indexStart];
        arr[indexStart] = arr[indexEnd];
        arr[indexEnd] = x;
        indexStart++;
        indexEnd--;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//**________________________________________________________________**//

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var x = fibArr[fibArr.length-1];
        var y = fibArr[fibArr.length-2];
        fibArr.push(x + y);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



