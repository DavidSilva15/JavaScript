//Estrutura condicional IF ELSE
//É utilizado para fazer testes condicionais entre variáveis
//Exemplo de uso

let idade = 27;
if(idade > 18){
    console.log('Você é maior de idade');
}else{
    console.log('Você é menor de idade');
}; //Verifica se a variável idade é maior que 18, caso sim, exibe a primeira mensagem, caso não, exibe a segunda mensagem

//Utilizando operadores relacionais no comando IF ELSE
let nome = null;
let altura = 1.86;
if(nome != null && altura > 1.80){
    console.log('Verificação aprovada');
}else{
    console.log('Verificação reprovada');
}; //Verifica se o nome está definido E a altura é maior que 1.80, caso sim, exibe a primeira mensagem, caso não, exibe a segunda mensagem
//OBS: Poderiamos utilizar o operador OU(||) para fazer a verificação acima

//Fazendo dois testes ao mesmo tempo
let cavalos = 104;
let torque = 14;
if(cavalos >= 78 && torque >= 9){ //Verifica se a variável cavalos e torque são maiores que seus respectivos valores
    console.log('Motor 1.6');
}else if(cavalos <= 78 && torque <= 9){ //Verifica se a variável cavalos e torque são menores que seus respectivos valores
    console.log('Motor 1.0');
}else{
    console.log('Motor fora das especificações'); //Caso nenhuma das verificações sejam satisfeitas, retorna essa mensagem
};

//Alterando valores de uma variável com base no if else
let numero = 0;
let controle = true;
if(controle == true){
    numero = 10;
    console.log(numero);
}; //Verifica se a variavel controle é true, se for, a variável número passa a valer 10, caso contrário, continua valendo 0