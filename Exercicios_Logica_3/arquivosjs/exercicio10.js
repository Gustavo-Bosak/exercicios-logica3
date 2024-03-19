// Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

var valor = parseInt(prompt("Informe até onde calcular as tabuadas"))
for (var z = 1; z <= valor; z++){
   for(var mult = 1; mult <= 10; mult++){
       tabuada = z * mult 
       document.write(z + " * " + mult + " = " + tabuada + "<br>")
   }
   document.write("<br>")
}
