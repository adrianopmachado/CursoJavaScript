/*
Adriano Parente Machado tem 33 anos, pesa 84 kg e tem 1.82 de altura e seu IMC é 25.359256128486894
*/

const nome = 'Adriano';
const sobrenome = 'Parente Machado';
let idade = 33;
let anoAtual = 2022
let peso = 84;
let alturaEmMetros = 1.82
let imc = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg e tem', alturaEmMetros, 'de altura e o seu IMC é', imc,);
console.log(nome, 'nasceu em',anoNascimento,)

//Outra forma

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg e tem ' + alturaEmMetros + ' de altura e o seu IMC é ' + imc);
console.log(nome + ' nasceu em ' + anoNascimento +'.');

//template strings - Utilizar dessa forma
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e tem ${alturaEmMetros} de altura e o seu IMC é ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`)
