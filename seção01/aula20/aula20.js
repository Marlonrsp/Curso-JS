/* Valores primitivos e valores por preferência
Primitivos (imutáveis: não pode ser mudados ou modificados):  String, number, boolean, undefined, null (bigint, symbol)
Referência (mutável) : Arrays, Object, Funcion

primitivos: valores copiados
referência: passados por referência
*/

// Exemplo Primitivos
let a = 'A';
b = a; 
console.log(a,b);

a = 'Outra Dimensão';
console.log(a,b);

// o valor de 'b' não foi alterado pq o mesmo há de ter salvo o conteúdo da variavel 'a' mesmo que ela foi alterada depois

// Exemplo Referência

let c = [1,2,3];
let d = c; // porem se quero copiar mesmo o valor da variavel eu devo fazer a seguinte forma exemplo: d = [...c];
// nesse caso tanto c quanto d apontam para o mesmo local na memória, sendo assim diferente do primitivo, esse caso não 'copia' os dados apenas apontam para o local na memoroia

console.log(c,d); // como os dados apontam para o mesmo local na memória, se caso eu alterar tanto o valor de c quanto de d o valores dentro desse array será alterado nos dois casos

c.push(4);// push insere dados no array

console.log(c,d);// como resultado, foi acrescentado o número 4 nos dois arrays, visto que quando iniciei a variavel d copiando a variavel c elas apontam para o mesmo local na memória

d.pop(); // removendo o numero 4 da variavel d

console.log(c,d);// porém, como ambas apontam para o mesmo valor na memoria, se eu executar o console log ambas vai mostrar o valor alterado 


const e = { 
    nome: 'Marlon',
    sobrenome: 'Rafael',
    idade: 25 
};

const f = {...e};// porém dessa forma como copiei os valores, o que for alterado em 'e' não irá afetar o que está em 'f'

e.nome = 'Santos';

console.log(e,f); 





