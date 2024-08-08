    //Loop DO WHILE
//O loop do...while é bastante semelhante ao while, mas com uma diferença fundamental: ele sempre executa o bloco de código pelo menos uma vez, mesmo que a condição seja falsa.
//Exemplo de uso

//Sintaxe
/*
do{
    //Código a ser executado
}while(condição);

*/

let contador = 1; //Define a variável contador com o valor de 1
do{ //Exibe o valor de contador e incrementa o valor do contador em +1
    console.log(contador);
    contador++;
}while(contador <= 5); //Executa o bloco acima enquanto o contador for menor ou igual a 5

//Exemplo prático
let entrada; //Define a variável senha como vazia
do{
    entrada = prompt('Digite uma senha (mínimo 6 caracteres): ') //Pede para que o usuário digite uma senha com 6 caracteres
}while(entrada.length < 6); //Enquanto o tamanho da senha for menor que 6, quando ela for maior, exibe a mensagem abaixo
alert('Senha válida');