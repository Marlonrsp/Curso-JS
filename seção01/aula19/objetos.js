// básico de objetos

const pessoa = {
    nome: 'Marlon',
    sobrenome: 'Santos',
    idade: 25,

    fala() {
       console.log(`Olá eu me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos de idade!`);
    },
    incrementaIdade(){
        ++this.idade;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

function criaPessoa (nome, sobrenome, idade){
    return {nome,sobrenome,idade};
}

const pessoa1 = criaPessoa ('Marlon', 'Santos', 25);
const pessoa2 = criaPessoa ('Rafael', 'Paulino', 26);
const pessoa3 = criaPessoa ('Natalyn', 'Lopes', 25);

/*
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
*/

console.log(`Olá ${pessoa1.nome}, seja muito bem vindo!`);
console.log(`Verificamos Sr(a) ${pessoa3.nome} ${pessoa3.sobrenome}, que o(a) Sr(a) tem ${pessoa3.idade} anos de idade!`);




