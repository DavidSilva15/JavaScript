//Loop FOR
//É utilizado quando precisamos repetir uma ação em uma determinada quantidade de vezes 
//Exemplo de uso

//Sintaxe
/*for(inicialização; condição; expressão final){
    //Código a ser executado
}*/

for(let i = 0; i < 10; i++){ //Define a variável i valendo 0, define a confição em que enquanto i for menor que 10, i vai receber +1
    console.log(i); //Exibe o valor de i 10 vezes
};

//Aplicação em arrays
let nomes = ['David', 'João', 'Marcos'];

for(let i = 0; i < nomes.length; i++){ //Define a variável i valendo 0, enquanto i for menor que o tamanho do array nomes, i recebe +1
    console.log(nomes[i]); //Exibe os nomes com base no índice ([i] Representa o índice dos nomes no array)
};