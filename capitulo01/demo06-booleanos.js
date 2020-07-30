const podeDirigir = true
if(podeDirigir){
    console.log('Ela pode dirigir')
}

const saldoEmConta = 1
if(!saldoEmConta){        //! sinal de negação
    console.log('não tem saldo')
}

const boolComString = "ae hackerzão!!"


//força o valor a true ou false
//de acordo com a tabela
console.log('boolComString', !!boolComString)   //!! transforma o valor em true ou false seguindo tabela

//negação
console.log('negação', !boolComString)

//negação + forçar a bool
console.log(
    'negação + forçar bool',
    !(!!boolComString)
)