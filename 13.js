var dos = 0, tres = 0;
for (var i = 1; i <= 100; i++){
if (i%2==0 && i%3==0){
    dos++;
    tres++;
    console.log(i)
}
else if (i%2==0 && i%3!=0){
    dos++;
    console.log(i)
}
else if (i%3==0 && i%2!=0){
    tres++;
    console.log(i)
}
}
console.log("total de multiplos de 2: " + dos);
console.log("total de multiplos de 3: " + tres);
