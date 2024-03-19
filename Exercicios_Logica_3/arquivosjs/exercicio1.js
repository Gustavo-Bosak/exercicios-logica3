// Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo. O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

var num1 = parseInt(prompt("Escreva um número"))
var num2 = parseInt(prompt("Escreva mais um número que não seja igual a 0 ou negativo"))

if (num2 <= 0) {
    alert("Esse número não pode ser um valor negativo ou igual a 0")
} else
    var soma = num1 / num2
    document.write ("A divisão entre esses números é " + soma)
