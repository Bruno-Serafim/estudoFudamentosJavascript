/*Tipo de dados:
*String --> 'meu poder' "meu nome" `meu nome` ""
*Number --> 10   0.4    10.10    0.00001
*/

let salarioDoAmigo = 1000
let meuSalario = "2999"
let meuSalarioCorrigido = Number(meuSalario) //convertendo meuSalario string para number

console.log('A soma dos salários é: ',salarioDoAmigo+meuSalario) //vai mostrar a concatenação dos dois salários
console.log('A soma dos salários é: ', salarioDoAmigo+meuSalarioCorrigido) //vai mostrar a soma dos dois salários

console.log(
    typeof(salarioDoAmigo), //typeof mostra o tipo da variável
    salarioDoAmigo          //imprime valor da variável
)

console.log(
    typeof(meuSalario), //typeof mostra o tipo da variável
    meuSalario          //imprime valor da variável
)

console.log(
    typeof(meuSalarioCorrigido), //typeof mostra o tipo da variável
    meuSalarioCorrigido          //imprime valor da variável
)

console.log(
    isNaN(meuSalario) //verifica se a variável não é um number dentro da string, se tiver letra será true
)

let minhaString = 'Olá mundo!'
let minhaOutraString = "Olá mundo!"
let minhaStringComVariáveis = `${minhaString} - ${minhaOutraString}. AE!` 

console.log(minhaStringComVariáveis)