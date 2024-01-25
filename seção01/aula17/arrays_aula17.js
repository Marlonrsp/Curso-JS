// em JavaScript os arrays estão sempre dentros de [] 

//                 0         1        2
const alunos = ['Marlon','Rafael','Santos']
console.log(alunos);
// os Arrays diferente de Strings eles são indexados por elementos dentro dele.
// e para acessar os elementos do array, se dá o mesmo como por indice de String, ex: 
console.log(alunos[2])
// exemplo de acesso no array, pelo elemento

// para editar o array segue o exemplo abaixo.

alunos[2] = 'Gabriel'; // ALTERAR ELEMENTO EXISTENTE NO ARRAY

console.log(alunos);

// agora um exemplo de adicionar um elemento no array

alunos[3] = 'Ana'; //ADICIONA NO FIM DO ARRAY

console.log(alunos);

console.log(alunos.length);//para ver o tamanho do array

// outro meio de adicionar um elemento no array, segue exemplo abaixo

alunos[alunos.length] = 'Taianara'; //ADICIONA NO FIM DO ARRAY
alunos[alunos.length] = 'Rodrigo'; //ADICIONA NO FIM DO ARRAY
alunos[alunos.length] = 'Natalyn'; //ADICIONA NO FIM DO ARRAY
alunos[alunos.length] = 'Andrei'; //ADICIONA NO FIM DO ARRAY

console.log(alunos.length);

console.log(alunos);

// outro método de fazer isso é com o push,porém, ele só adiciona o elemento no final do array, exemplo.

alunos.push('Maria');
alunos.push('Mateo');

console.log(alunos);
console.log(alunos.length);

// agora outro método de adição de elemento no array, porém no inicio dele

alunos.unshift('Juliana'); //ADICIONA NO INICIO DO ARRAY
//PORÉM, SE EU UTILIZAR NOVAMENTE ESSE MÉTODO, O PROXIMO ELEMENTO PASSA A FRENTE DO ULTIMO ADICIONADO COM ESSA FUNÇÃO/MÉTODO
console.log(alunos);

console.log(alunos.length);


//AGORA UTILIZAMOS A FUNÇÃO 'POP' PARA REMOVER UM ELEMENTO DO ARRAY, ELEMENTO FINAL

alunos.pop(); // nesse caso Mateo deixará de exister no meu array/ REMOVE O ULTIMO ELEMENTO

console.log(alunos);
// PORÉM PODEMOS 'SALVAR' ESSE ELEMENTO APENAS CRIANDO UMA VARIÁVEL, POR EXEMPLO

const removido = alunos.pop();

console.log(removido)
console.log(alunos)

// PARA REMOVER O ELEMENTO DO COMEÇO UTILIZA O MÉTODO SHIFT,POR EXEMPLO

alunos.shift();

console.log(alunos);

console.log(alunos.length);

//agora se eu quiser remover um elemento em específico, utiliza-se o DELETE

delete alunos[3];
console.log(alunos);


// ainda sim podemos acessar um elemento que não consta no array, por exemplo

console.log(alunos[25]); // porém como não existe no array, irá retornar undefined


console.log(alunos.slice(1, 5));


console.log(typeof alunos); // VAI RETORNAR COMO OBJECT, POIS UM ARRAY É UM OBJETO
console.log(alunos instanceof Array); // vai retornar um booleano, se for array TRUE,senão, FALSE


