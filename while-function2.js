//	Calcule a soma de todos os números de 1 a 100 utilizando um laço de repetição.

cont=0
soma=0
while(cont<=100){
console.log("A soma dos números de 1 a 100 é igual a ", soma+=cont)
cont++
}


function ate100 (cont, soma){

cont=0
soma=0

while(cont<=100){
  soma+=cont 
  cont++
}
  return soma
}
  console.log("A soma dos números de 1 a 100 é igual a "+ ate100())
