const num = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto-div');

numeroTitulo.innerHTML = num;

texto.innerHTML = '';

texto.innerHTML += `<p><h2><Strong> Raiz quadrada: ${num ** 0.5} </Strong></h2></p>`;

texto.innerHTML += `<p><h2><Strong> ${num} é inteiro:  ${Number.isInteger(num)} </Strong></h2></p>`;

texto.innerHTML += `<p><h2><Strong> É NaN: ${Number.isNaN(num)} </Strong></h2></p>`;

texto.innerHTML += `<p><h2><Strong> Arredondado para baixo: ${Math.floor(num)} </Strong></h2></p>`;

texto.innerHTML += `<p><h2><Strong> Arredondado para cima: ${Math.ceil(num)} </Strong></h2></p>`;

texto.innerHTML += `<p><h2><Strong> Com duas casas decimais: ${num.toFixed(2)} </Strong></h2></p>`;
