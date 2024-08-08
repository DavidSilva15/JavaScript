//OPERADORES RELACIONAIS
//Os operadores lógicos também são utilizados para comparações em testes lógicos
//São eles &&(e), ||(ou), !(negação)

let login = false;
let n1 = 20;
let n2 = 30;

//O operador &&(e) precisa que todas as verificações sejam true para que ele retorne true
console.log(n1 < 10 && n2 == 30); //Verifica se n1 é menor que 10 E se n2 é igual a 30. Ambos os casos precisam retornar true(verdadeiro) para a verificação retornar true
console.log(n1 == n2 && login != true); //Verifica se n1 é igual a n2 E login é diferente de true

//O operador ||(ou) precisa que apenas uma verificação seja true para que ele retorne true
console.log(n1 < 10 || n2 == 30); //Verifica se n1 é menor que 10 OU se n2 é igual a 30. Ambos os casos precisam retornar true(verdadeiro) para a verificação retornar true
console.log(n1 == n2 || login != true); //Verifica se n1 é igual a n2 OU login é diferente de true

console.log(!login); //Inverte o valor da variável login para (De true para false e poderia ser o inverso)