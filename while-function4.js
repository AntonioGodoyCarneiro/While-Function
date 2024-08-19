cont = 10

a = 0
b = 1
i = 0 // essa variável é a quantidade de números que quero que apareça.

console.log("Sequência de Fibonacci:");

while (i < cont) {
    console.log(a);  // Imprime o número atual da sequência
    proximo = a + b;  // Calcula o próximo número da sequência
    a = b;  // Atualiza 'a' para o próximo número
    b = proximo;  // Atualiza 'b' para o próximo número
    i++;  // Incrementa o contador
}


