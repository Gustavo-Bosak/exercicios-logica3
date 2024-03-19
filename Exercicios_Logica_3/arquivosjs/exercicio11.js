// Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

var dentro = 0;
var fora = 0;

for(var z = 0; z < 10; z++){
    var num1 = parseInt(prompt("Informe um valor"))
    if(num1 >= 24 && num1 <= 42){
        dentro++
    }else
        fora++;
}
alert("Dos valores informados, " + dentro + " valores estão entre 24 e 42 e " + fora + " valores estão fora")