// Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N é um valor informado pelo usuário.

for (var num1 = parseInt(prompt("Informe um número")); num1 >= 1; num1--){
    document.write(num1 + ", ")
}
