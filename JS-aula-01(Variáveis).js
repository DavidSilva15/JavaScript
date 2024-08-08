//VARIÁVEIS

//Variáveis assumem valores do tipo string(Texto), number(Número) e boolean(Verdadeiro ou falso)
var nome = 'David';
var idade = 27;
var dev = true;

//As variáveis podem ser declaradas dentro e fora dos escopos locais e globais
var idade = 27; //Variável do tipo global (Pode ser acessada de qualquer lugar)

let linguagem = 'javascript'; //Variável do tipo local(Só pode ser acessada dentro do escopo ao qual foi declarada)

const nome = 'David'; //Constante(Tipo de variável que não se altera, valor absoluto)

//Exemplo de uso das variáveis
//Exemplo simples(Uso global)
const nome = 'David'; 
console.log(nome); //Exibe o valor de nome no console do navegador

//Exemplo de uso na função(Uso local)
function exibirIdade(id){ //Cria uma função que exibe a variável idade no console
    let idade = id; //Define a variável idade dentro do escopo da função
    console.log(idade); //Exibe a idade quando a função for chamada
};
exibirIdade(27); //Faz a chamada da função e passa o valor da variável da idade para o parâmetro idade