const nome = 'Marlon Rafael';
const sobrenome = 'dos Santos Paulino';
const idade = 25;
const peso = 130;
const altura = 1.73;
let imc;
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, 
tem ${altura} de altura e o seu IMC é ${imc}. ${nome} nasceu no ano de ${anoNascimento}.`);