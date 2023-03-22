//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const object1 = {firstName:"João", seccondName:"Maria"}

const result1 = object1.firstName == object1.firstName
const result2 = object1.firstName == object1.seccondName

console.log(result1)
console.log(result2)