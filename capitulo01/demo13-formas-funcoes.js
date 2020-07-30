function minhaFuncao1(parametro1){
    return `Serafa`
}

const minhaFuncao2 = function(parametro1){
    return `Serafa ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
    return `Serafa ${parametro1}`
}

const minhaFuncao4 = parametro1 => `Serafa ${parametro1}`

//criar função dentro de um objeto
const obj1 = {
    minhaFuncao: parametro1 => `Serafa ${parametro1}`
}

obj1.minhaFuncao('test')


const obj2 = {
    minhaFuncao (parametro1){
        return `Serafa ${parametro1}`
    }
}

obj2.minhaFuncao()