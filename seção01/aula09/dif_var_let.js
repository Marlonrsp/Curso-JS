// diferença entre var e let
var nome = 'Marlon';
var nome = 'Rafael'; //EXEMPLO
console.log(nome);

/* O PROBLEMA DO VAR É QUE NÃO TEM RESTRIÇÃO EM CRIAR UMA VARIAVEL DE MESMO NOME, 
LOGO ISSO CAUSARIA UMA REDECLARAÇÃO DESSA VARIAVEL GERANDO UM ERRO NO SEU CODIGO
*/
/*
let nome = 'Marlon';
//let nome = 'Rafael'; //EXEMPLO

console.log(nome);

/*PORÉM, COM LET EU NÃO CONSEGUIRIA DECLARAR NOVAMENTE UMA VARIAVEL DE MESMO NOME VISTO QUE ISSO
ACARRETARIA EM ERRO GERANDO UMA PARALIZAÇÃO OU ATÉ MESMO NÃO EXECUTANDO O CÓDIGO DE FORMA CORRETA
*/


nome = 'Marlon'; //NÃO CRIAR DESSA FORMA, POIS ISSO FARIA COM QUE ESSA VARIAVEL SEJA GLOBAL, ENTÃO DEVO CRIAR VARIAVEIS SOMENTE COM CONST E LET
