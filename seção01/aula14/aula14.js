//          012345  
let nome = 'Marlon';

console.log(`${nome} Rafael dos Santos`); // essa forma é a mais viavel, pois não ocuparia mt tempo para transcreve-la
console.log(nome.charAt(0)); // essa função é para verificar qual caractere está sendo selecionado;
console.log(nome.indexOf('n',4)); // essa função se inicia da esquerda para a direita, para verificar a posição e qual caractere esta naquele index
console.log(nome.lastIndexOf('M',5)); // ja essa se inicia da direita para a esquerda, referindo a verificar a posição e caractere da index do texto
console.log(nome.match(/[a-z]/g))// expressão regular, onde retorna todos os elementos e a posição de todas as letras minusculas
console.log(nome.search(/l/));// função parecida com a math, porém ela permite colocar a letra a qual esta buscando nos / /
console.log(nome.replace('Marlon', 'Rafael'))// essa função permite eu substituir as palavras ou letras da minha string
console.log(nome.length);// ver o tamanho da string
console.log(nome.toUpperCase())// deixar toda a string em maiusculo
console.log(nome.toLowerCase())// deixar toda a string em minusculo