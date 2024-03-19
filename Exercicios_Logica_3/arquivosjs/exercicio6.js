// Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

var continua = true
        
while (continua) {
var nota1 = parseInt(prompt("Informe a primeira nota"))
var nota2 = parseInt(prompt("Informe a segunda nota"))
var media = (nota1 + nota2) /2

if (media >= 9.5) {
    alert("Aprovado")
} else
    alert("Reprovado")

continua = prompt("Calcular a média de outro aluno? S/N")
if (continua == "N" || continua == "n"){
    continua = false
} else
    continua = true
}
