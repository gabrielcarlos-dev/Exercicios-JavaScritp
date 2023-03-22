//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const object1 = {name:"João"}
const object2 = {name:"Maria"}

const result1 = object1 == object1
const result2 = object1 == object2

console.log(result1)
console.log(result2)