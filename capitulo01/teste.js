
// const pessoa = {
//     _nome: '',
//     _idade: 20,

//     get nome(){
//         return this._nome
//     }, 
//     set nome(valor){
//         this._nome = valor.toUpperCase()
//     },

//     get podeDirigir(){
//         return this._idade > 18
//     },
//     set idade(valor){
//         this._idade = valor
//     }

// }

// pessoa.nome = "oi"
// pessoa.idade = 19
// console.log (pessoa.idade)

// const args = process.argv
// const saldo = args[args.length -1]
// // console.log(`args ${args}`)
// // console.log(`saldo ${saldo}`)

// if(isNaN(saldo)){
//     console.log('Valor invalido')
//     return;
// }
//______________________________



const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'zezinho',
        superPoder: 'Veloz'
    },

    {
        id: Math.random(),
        nome: 'Maria',
        superPoder: 'Super força'
    },
]

// for( let index = 0; index < minhaListaDeTarefas.length; index++){
//     const item = minhaListaDeTarefas[index]
//     console.log(`
//     id: ${item.id}
//     nome: ${item.nome}
//     `)
// }

// for(const index in minhaListaDeTarefas){
//     const item = minhaListaDeTarefas[index]
//     console.log(`
//         id: ${item.id}
//         nome: ${item.nome}`
//         )   
// }

for(const item of minhaListaDeTarefas){
    console.log('nome', item.nome)
}
