//OPERADOR TERNÁRIO
//É uma maneira alternativa de verificação de testes lógicos
//Exemplo: condição ? expressão1 : expressão 2

//Exemplos de uso
let idade = 18;
let podeVotar = (idade >= 18) ? "Sim." : "Não"; // Verifica se a idade é maior ou igual a 18, caso sim, retorna SIM, caso não, retorna NÃO 
console.log(podeVotar);  // Resultado: Sim, pode votar

let numero = 7;
let tipo = (numero % 2 === 0) ? "par" : "ímpar"; //Verifica se o resto da divisão da variável número é igual a 0, caso sim, o número é par, caso não, o número é impar
console.log('O número ' + numero + ' é ' + tipo);  // Resultado: O número 7 é ímpar

let usuario = null;
let nome = usuario ? usuario.nome : "Visitante"; //Verifica se existe a propriedade nome na variável usuário, se não existir, informa que o usuário é visitante
console.log(`Olá, ${nome}!`);  // Resultado: Olá, Visitante!

//Resultado caso existise a propriedade nome na variável usuário
/*let usuario = null;
usuario = {};
usuario.nome = 'David'
let nome = usuario ? usuario.nome : "Visitante";
document.write('Olá, ' + nome + ' !');*/