// básico de funções

/*
EXEMPLO DE UMA FUNÇÃO SIMPLES
*/

function saudacao(nome) {
    return `Bom Dia ${nome}!`;
}

const variavel  = saudacao('Marlon');

console.log(variavel);


//TUDO O QUE ESTIVER DENTRO DA FUNÇÃO ESTÁ PROTEGIDO, ENTÃO NÃO É POSSIVEL ACESSAR O QUE ESTÁ DENTRO DELA

// ADENDO: NADA QUE ESTÁ ABAIXO DE RETURN SERÁ EXIBIDO, ASSIM QUE O JS VER A PALAVRA RETURN, SERÁ ENCERRADA AQUELA FUNÇÃO

function soma (x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2));

//função anonima, nesse caso necessita do ;
// arrow function

//const raiz =  n => n ** 0.5; // por incrivel que pareça, essa linha é uma função, bem simplificada para os programadores, visto que so te um parametro e um tipo de retorno

const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(16));
console.log(raiz(81));