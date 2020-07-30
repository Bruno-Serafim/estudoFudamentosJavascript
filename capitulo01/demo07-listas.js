const minhaLista = []

const minhaListaDeTarefas = [
    'mandar email',
    'colcoar comida para o dog',
    'limpar o quarto'
]

//console.log(minhaListaDeTarefas[0]) //mostra a posição 0 da lista 'mandar email'
//console.log(minhaListaDeTarefas[1]) //mostra a posição 1 da lista 'colcoar comida para o dog'
//console.log(minhaListaDeTarefas[4]) //mostra undefined pois não existe a posição 4

//quantidade de intens na lista
//console.log(minhaListaDeTarefas.length)

//adicionar item
//minhaListaDeTarefas.push('formatar computador')     //.push adiciona um intem na lista
//console.log(minhaListaDeTarefas)

//como remover o ultimo da lista
//const ultimo = minhaListaDeTarefas.pop()       //.pop remove um o ultimo item da lista
//console.log(ultimo, minhaListaDeTarefas)

//remover o primeiro da lista
//const primeiro = minhaListaDeTarefas.shift()      //.shift remove o primeiro item da lista
//console.log(primeiro, minhaListaDeTarefas)

//remover um item especifico a partir de um indice
//console.log('item 2:', minhaListaDeTarefas[2])

//.splice remove itens da lista a partir de um indice
//primeiro paramentro é o intem de inicio, onde será iniciado a remoção
//segundo parametro é quantidade de itens que será removido
//exemplo abaixo remove apenas um intem a partir de indice 2, ou seja, removerá o item 2
//minhaListaDeTarefas.splice(2,1)
//console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador', 0.22
]

//verificar o tipo do array
//console.log(typeof(itens))  //resultado será object

//verificar se é array da forma correta
//console.log(Array.isArray(itens));

//ordenar
//const numeros = [ 3,2,1,0]
//console.log(numeros.sort())

//juntar dois arrays

//const novo = itens.concat([1,2,3])
//console.log(novo)

//juntar arrays em uma string
//console.log(itens.join(', '))

//verificar indice do item
const indice = itens.indexOf('computador')
console.log(indice)