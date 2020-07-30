const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

// console.log('nome: ', heroi.nome)
// console.log('idade: ', heroi['idade'])
// console.log('sexo: ', heroi.sexo)
// console.log('nãoExiste: ', heroi.nãoExiste)

//adicionando item no objeto
// heroi.id = 0001
// console.log(heroi)

//saber todas as chaves de um objeto
//basta utilizar o Objetc.keys
//console.log(Object.keys(heroi))

//saber todas os valores de um objeto
//basta utilizar o Objetc.values
//console.log(Object.values(heroi))

const pessoa = {
    tamanho: '10 metros'
}

//juntando dois objetos
//basta utilizar o Objetc.assign
 const novoObject = Object.assign(heroi, pessoa)
// console.log(novoObject)


//deletar uma chave dentro do objeto
//basta utilizar o delete
delete novoObject.nome

console.log(novoObject)