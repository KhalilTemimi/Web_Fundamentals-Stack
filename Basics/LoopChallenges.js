console.log("Print odds 1-20");

for(i=1 ; i<21 ; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

console.log("Decreasing Multiples of 3");

for(i=100 ; i>=0 ; i--){
    if(i%3 == 0){
        console.log(i);
    }
}

console.log("Print the sequence");

for(i=4; i>-4; i-=1.5){
    console.log(i);
}

console.log("Sigma");

var sum=0;
for(i=1; i<=100; i++){
    sum += i;
}
console.log(sum);

console.log("Factorial");

var sum=1;
for(i=1; i<=12; i++){
    sum *= i;
}
console.log(sum);
