//5
var cont = 0;
for (var i = 1; i < 101; i++){
    var n = i;
    if (n%2!=0){
      console.log(n); 
        cont++;
    }
}
console.log("el total de numeros impares es: " + cont);