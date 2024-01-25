// Essas são as funções ou métodos do Objeto Window
/*alert('Olá mundo.'); // essa função de alert por si só não retorna nada, pois, reconhece como valor undefined que não aponta para nenhum local na memoria
confirm('Você deseja apagar os dados?');// ja a função de confirm, sempre vai retornar um valor booleano, ou seja, verdadeiro (true) ou falso (false)
prompt('Digite o seu nome completo: ');
*/
// exemplo de como capturar um valor com a função confirm
/*const confirma = confirm('Realmente deseja apagar?');

// agora, como foi realizado uma variavél para essa função, quaisquer ação do usuário vai ser salva na memoria resultando num valor que podemos salvar e assim analisar corretamente o que ele deseja
let num1 = prompt('digite um número: ');
num1 = parseFloat(num1);
*/

let num1 = prompt('Digite o primeiro valor: ');
let num2 = prompt('Digite o segundo valor: ');

num1 = Number(num1);
num2 = parseFloat(num2);
let resultado;
resultado = (num1 + num2);
alert(`O resultado da soma foi de ${resultado}`);// para utilizar o $ na string sempre use crases ``
