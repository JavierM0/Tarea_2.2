var num = prompt('numero a contar multiplos de 3: ');
var cont = 0;
for (var i = 1; i <= num; i++){
if (i%3==0){
  console.log(i);
    cont++
  }
}
console.log("total de multiplos de 3: " + cont);