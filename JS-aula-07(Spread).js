//Operador SPREAD
//É usado para expandir elementos de arrays ou propriedades de objetos

//Exemplo de uso em arrays

//Criando uma copia de um array
let pessoas = [1, 2, 3];
let copiaPessoas = [...pessoas];
console.log(copiaPessoas); //Exibe uma copia do array original

//Combinando dois ou mais arrasy
let modelos1 = ['Celta', 'Gol', 'Uno'];
let modelos2 = ['Onix', 'Argo', '208'];
let combinaArray = [...modelos1, ...modelos2];
console.log(combinaArray); //Exibe um array com a combinação dos arrays modelos1 e modelos2a

//Exemplo de uso em objetos

let objeto = {a: 1, b: 2};
let copiaObjeto = {...copiaObjeto};
console.log(copiaObjeto); //Exibe uma copia do objeto

let objeto1 = {a: 1, b: 2};
let objeto2 = {c: 3, d: 4};
let combinaObjeto = {...objeto1, ...objeto2};
console.log(combinaObjeto); //Exibe a combinação do objeto1 + objeto2 