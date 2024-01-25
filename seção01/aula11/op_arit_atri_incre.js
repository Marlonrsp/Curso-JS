/* 
Aritméticos 
()
+ (Adição e também concatenação) 
- / *        
** (Potenciação, números elevados)
% resto da divisão
++ -- operadores de incremento e decremento
*/
const num1 = 4;
const num2 = 6;
console.log(num1 + num2);

// esse caso foi feito a adição com o sinal de +


const num3 = '3';
const num4 = 8;
console.log(num3 + num4);

// esse caso não foi realizado a adição e sim a concatenação, ou seja, a união dos valores devido um deles estar como String com as aspas

const num5 = 5;
const num6 = 10;
console.log(num5 ** num6);

// exemplo de valor com elevação ou potenciação em relação a outro

const num7 = 20;
const num8 = 4;
console.log(num7 % num8);

// exemplo de resto da divisão, e caso o resto da divisão for por inteiro o resultado é 0 (zero)

console.log(num1 + num4 * num7 - num6 / num5);

// exemplo de ordem de prescedência




