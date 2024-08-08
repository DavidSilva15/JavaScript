//FUNÇÕES
//Funções em JavaScript são blocos de código projetados para executar uma tarefa específica.
//Exemplo de uso

//Sintaxe
/*

function(parâmetros){
    bloco de código a ser executado
};

*/

//Exemplo de aplicação

//A função abaixo tem os parâmetros definidos com A e B retornando a soma de ambos
function soma(a, b) {
    return a + b;
};

//Aqui os parâmetros são passados de forma direta, mas podem ser passados através de variáveis
console.log(soma(20, 30));

//No exemplo abaixo, variáveis são passadas como parâmetro
let n1 = 20;
let n2 = 30;

function divisao(a, b) {
    return a / b;
};
console.log(divisao(n1, n2));

//------------------------------------------Função expressa--------------------------------------------
//Função que é atribuida a uma variável 
let soma = function(a,b){
    return a+b;
};

//------------------------------------------Arrow function--------------------------------------------
//Função anônima, ou de flecha. Tem uma sintaxe mais curta para declaração de funções
let soma = (a, b) => a + b;

//------------------------------------------Função de Callback--------------------------------------------
//Uma função de callback é passada como argumento para outra função
function saudacao(nome, callback){
    console.log('Olá' + nome);
    callback();
};

function despedida(){
    console.log('Adeus!');
};

saudacao('David', despedida);

//------------------------------------------Função construtora--------------------------------------------
//Funções construtoras são usadas para criar objetos. Elas são normalmente definidas com uma letra maiúscula inicial.
function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
};

let pessoa1 = new Pessoa('David', 27);
console.log(pessoa1);

//------------------------------------------Funções de eventos--------------------------------------------
//Utiliza um ouvinte de eventos para executar uma função
document.getElementById('idDoElemento').addEventListener('click', function(){
    alert('Botão clicado');
});