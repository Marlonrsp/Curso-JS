// IEEE 754-2008     PADRÃO QUE O JAVASCRITP UTILIZA PARA NÚMEROS DECIMAIS
let num1 = 0.7; // number
let num2 = 0.1; //  number

num1 += num2;//0.8
num1 += num2;//0.9
num1 += num2;//1.0

//num1 = num1.toFixed(2);

/* nesse caso não irá resolver o problema; 
explicação console.log(Number.isInteger(num1));
*/

/**
 * Porém, esse problema pode ser resolvido da seguinte maneira.
 */

num1 = parseFloat(num1.toFixed(2));

/**
 * agora ao converter para número flutuante (Float)
 * o resultado vai ser o correto visto que números flutuantes
 * sempre estão na casa
 */

console.log(num1);

console.log(Number.isInteger(num1));

/* o problema não será resolvido pq ao chamar essa função 
para verificar se é ou não um numero inteiro, 
o método vai retornar como false
*/

//console.log(num1.toString() + num2); 

/*nesse caso como utilizei o metodo toString() eu passo 
temporariamente o valor da variavel num1 para um String, 
ao passo que quando utilizo o sinal de + nesse momento ele 
ira fazer uma concatenação com a segunda variavel no caso o num2
*/ 

//console.log(typeof(num1)); 

/* mesmo após eu fazer essa conversão, 
ainda sim o tipo da variavel não se altera, 
ou seja, a variavel num1 ainda continua 
sendo um number */

//num1 = num1.toString();

/* Já nesse caso eu estou alterando para sempre
a variavel num1 para uma string, ao fazer com que
a variavel num1 receba '=' o método de toString()
assim.
*/

//console.log(typeof(num1));

/*nesse momento ao chamar o console
a variavel num1 ja esta convertida para String
 */

//let num3 = 33;

//console.log(num3.toString(2));

/* esse método ou chamada no toString 
com o numero 2, mostra o numero ou a chamada em binários
ex: 01100110  
outro adendo, essa função só irá funcionar com númerais 012345 etc.
*/

//let num4 = 20.346216;

//console.log(num4.toFixed(2));

/**
 * Essa função fará com que números grandes fiquem arredondados
 * a utilização do numero 2 é para determinadas casas decimais
 * que é utilizado com mais frequencia!
 */

/** 
 * ADENDO ****: AO UTILIZAR O PONTO . NA CHAMADA DO CONSOLE, COMO NOS EXEMPLOS
ACIMA, EU NÃO ESTOU ALTERANDO O VALOR ORIGINAL DA VARIAVEL A MENOS QUE EU ALTERE 
FORÇADAMENTE COMO POR EXEMPLO:  num1 = num1.toString();
JÁ A CHAMADA NO CONSOLE, NÃO IRA ALTERAR O VALOR DA VARIAVEL 
EXEMPLO: console.log(num3.toString(2)); / console.log(num4.toFixed(2));
 * */ 

//console.log(Number.isInteger(num2));
//console.log(Number.isInteger(num3));

/**
 * Esse método de Number.isInteger vai verificar se o número
 * que está sendo chamado ou que está na variavél é um número
 * inteiro, esse método sempre vai retornar um valor booleano
 * VERDADEIRO (TRUE) ou FALSO (FALSE)
 */
