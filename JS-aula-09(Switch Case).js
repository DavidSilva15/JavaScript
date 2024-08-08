//Comando SWITCH CASE
//Semelhante ao IF ELSE, porém podemos controlar a continuação ou não do bloco de códigos
//Exemplo de uso

let usuario = 'David';
switch(usuario){ //Utiliza a variável usuario como parâmetro de verificação
     case 'David': //Caso o conteúdo da variável usuario seja igual a 'David, retorna a mensagem abaixo
        console.log('Seja bem-vindo ' + nome + '!');
        break; //Para a execução do código
    
    case 'Joao': //Caso o conteúdo da variável usuario seja igual a 'Joao, retorna a mensagem abaixo e assim para os demais
        console.log('Acesso negado!');
        break;
    
    case 'Marcos':
        console.log('Acesso negado!');
        break;
    
    default: //Caso nenhum dos casos seja atendido, retonra a mensagem abaixo
        console.log('Digite um usuário válido');
};

//Alterando o valor de uma variável com o SWITCH
let dia = 1;
let nomeDia;
switch(dia){
    case 1:
        nomeDia = 'Domingo';
        break;
    case 2:
        nomeDia = 'Segunda-feira';
        break;
    case 3:
        nomeDia = 'Terça-feira';
        break;
    case 4:
        nomeDia = 'Quarta-feira';
        break;
    case 5:
        nomeDia = 'Quinta-feira';
        break;
    case 6:
        nomeDia = 'Sexta-feira';
        break;
    case 7:
        nomeDia = 'Sábado';
        break;

    default:
        nomeDia = 'Dia inválido';
};

console.log('O dia' + dia + ' da semana é ' + nomeDia);