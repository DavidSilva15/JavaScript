//Loop DO WHILE
//O loop while é usado para repetir um bloco de código enquanto uma condição especificada for avaliada como verdadeira.
//Exemplo de uso

//Sintaxe
/*
while(condição){
    Código a ser excutado
}
*/

let contador = 1; //Inicializa a variável contador valendo 1
while(contador <= 5){ //O loop estabelece que: Enquanto o contador for menor ou igual a 5, ele vai receber +1 e vai ser exibido na tela o valor do contador
    console.log(contador);
    contador++; //Incremento enquanto a condição não for satisfeita
};

//Exemplo avançado
let combustivel = 50;
let consumoPorKm = 10;
let distancia = 0;

while(combustivel > 0){ //Enquanto o combustível for maior que 0
    distancia++; //A distância vai receber +1
    combustivel -= consumoPorKm; //O combustível vai ser decrementado em menos o consumoPorKm
};

console.log('Você percorreu ' + distancia + ' km com o tanque cheio'); //Exibe a quantidade de km percorrido com o tanque cheio