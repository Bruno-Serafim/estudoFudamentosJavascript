const textoPar = "par"
const textoImpar = "Impar"

// for(let index = 0; index <= 10; index++){
//     const decisao = index % 2 === 0 ? textoPar : textoImpar
//     console.log(`O número ${index} é ${decisao}`)
// }

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'zezinho',
        superPoder: 'Veloz'
    },
    {
        id: Math.random(),
        nome: 'Mariazinha',
        superPoder: 'super força'
    }
]

// console.log(minhaListaDeTarefas)

//varrendo a lista com o for
// for (let index = 0; index < minhaListaDeTarefas.length; index++){
//     const item = minhaListaDeTarefas[index]
//     console.log(`
//     id:${item.id}
//     nome: ${item.nome}`)
// }
//----------------

//varrendo a lista com o forin
// for(const index in minhaListaDeTarefas){
//     const item = minhaListaDeTarefas[index]
//     console.log(`
//     id: ${item.id}
//     nome: ${item.nome}`)
// }

//varrendo a lista com o forin
//não precisa usar o index
for(const item of minhaListaDeTarefas){
    console.log(`
    id: ${item.id}
    nome: ${item.nome}`)
}
