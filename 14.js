var mayor=0;
var menor=999999;

for (var i = 0; i < 5; i++){
var num = prompt('numero: ');
if(Number(num)>mayor){mayor=Number(num);} 
if(Number(num)<menor){menor=Number(num);}
}
console.log("numero menor es: " + menor);
console.log("numero mayor es: " + mayor);