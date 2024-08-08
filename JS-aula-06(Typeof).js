//Operador TYPEOF Verificando o tipo da variável
//Verifica o tipo da variável ou dado em questão
//Exemplo de uso

let nome = 'David';
let idade = 27;
let aprendendo = true;

console.log(typeof nome); //Verifica o tipo da variável nome. Retorna 'String'
console.log(typeof idade); //Verifica o tipo da variável idade. Retorna 'Number'
console.log(typeof aprendendo); //Verifica o tipo da variável aprendendo. Retorna 'Boolean'

//Exemplos com outros tipos de dados
let indefinido;
let nulo = null;
let objeto = {nome: 'David'};
let array = [1, 2, 3];
let funcao = function(){};

console.log(typeof indefinido); //Verifica o tipo da variável indefinido. Retorna 'undefined'
console.log(typeof nulo); //Verifica o tipo da variável nulo. Retorna 'null'
console.log(typeof objeto); //Verifica o tipo da variável objeto. Retorna 'object'
console.log(typeof array); //Verifica o tipo da variável array. Retorna 'objetc'
console.log(typeof funcao); //Verifica o tipo da variável funcao. Retorna 'function'