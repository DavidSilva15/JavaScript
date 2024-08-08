//Loop FOR IN e FOR OF
//FOR IN é utilizado para percorrer objetos e retornar as propriedades de cada objeto
//Exemplo de uso

//Sintaxe
/*
for(indice in objeto){
    console.log(indice + ': ' + objeto[propriedadeDoObjeto]);
};
*/

let pessoa = { //Declara um objeto pessoa
    nome: 'David', //Propriedades do objeto
    idade: 27
};
for(indiceProp in pessoa){ //Tem como parâmetro a propriedade e o objeto (Nesse caso o índice é a propriedade e pessoa é o objeto
    console.log(indiceProp + ': ' + pessoa[indiceProp] + '<br>'); //Após percorrer o objeto, exibe as propriedades com base no índice
};

//FOR OF é utilizado para percorrer arrays e retornar o valores ou os objetos do array
//Exemplo de uso

//Sintaxe
/*
for(objetoValor of array){
    console.log(objetoValor);
};
*/

let carros = ['Celta', 'Gol', 'Uno']; //Declara o array de carros
for(let carro of carros){ // Define a variável que vai assumir o valor de cada carro de dentro do array
    console.log(carro + '<br>'); //Exibe os carros que estão dentro do array
};


//Percorrendo um array de objetos com FOR OF
//Definindo o array de times
let times = [
    {nome: 'Bahia', serie: 'A'},
    {nome: 'Vitória', serie: 'B'}
];
for (let time of times) { //Percorrendo o array de times
    console.log('Time: ' + time.nome + ' Serie: ' + time.serie + '<br>' + '<br>'); //Exibe as respectivas propriedades de cada time dentro do array
};

//Percorrendo um objeto de arrays com ambos os loops
//Definindo o objeto em que cada propriedade é um array
let dados = {
    nomes: ['David', 'João', 'Marcos'],
    idades: [27, 20, 25]
};

for(let indiceValor in dados){ //Define a variável que vai assumir o valor das propriedades
    for(let valor of dados[indiceValor]){ //Define a variável que vai assumir o valor com base no índice do array
        console.log(valor); //Exibe as respectivas propriedades no console do navegador
    };
};