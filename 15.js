var num1 = prompt('ingrese un numero: ');
var num2 = prompt('ingrese otro numero: ');
var cont = 0;
var par = 0;
var impar = 0;

if(num1==num2){}
  else if(num1>num2){ 
    for(var i= num2; i<=num1; i++){
        console.log(i);
        cont++;
        if(i%2==0){
          par++;
        } else {
          impar+=i;
        }
    }
}
  else if(num2>num1){ 
    for(var i= num1; i<=num2; i++){
        console.log(i);
        cont++;
        if(i%2==0){
          par++;
        } else {
          impar+=i;
        }
    }
}

console.log("total de numeros: " + cont);
console.log("total de numeros par: " + par);
console.log("total de suma numeros impar: " + impar);