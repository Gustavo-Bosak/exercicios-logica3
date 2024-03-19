// Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.

var qq = 0
var soma = 0

while (qq <= 5) {
var num1 = parseInt(prompt("Informe uma nota"))
    if (num1 <= 10 && num1 >= 0) {
        soma += num1
        qq++
    } else
    alert("Informe uma nota entre 0 e 10")
}

var media = soma /6

alert("A média desse aluno é " + media)
