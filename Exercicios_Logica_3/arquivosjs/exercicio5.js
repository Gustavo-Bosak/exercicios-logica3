// Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

var num1 = parseInt(prompt("Informe um número"))
var num2 = parseInt(prompt("Informe outro número maior"))
var soma = ((num1 - num2) * (num1 + num2)) /2

var media = soma / (num1 - num2)

document.write ("a média dos valores " + num1 + " e " + num2 + " e todos os valores inteiros entre eles é " + media)
