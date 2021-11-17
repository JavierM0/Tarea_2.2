var par = 0, impar = 0;
for (var i = 1; i <= 100; i++){
if (i%2==0)
    par+=i
else
    impar+=i
}
console.log("total de pares: " + par);
console.log("total de impares: " + impar);
