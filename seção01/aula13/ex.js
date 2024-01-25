let varA = 'A';
let varB = 'B';
let varC = 'C';
/*
vA = varA = 'B';
vB = varB = 'C';
vC = varC = 'A';
*/
[varA,varB,varC] = [varB,varC,varA]
console.log(varA,varB,varC)