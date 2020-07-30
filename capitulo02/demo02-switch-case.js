const readLine = require('readline')
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    //todo texto de saída sairá no terminal
    output: process.stdout
})


//texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de media
Digite 1 para acessar o menu incial
digite 2 para acessar o menude Herois
Digite 3 para acessar o menu de Guerreiros
Digite 0 para sair`



const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1:{
        texto: 'submenu! Pressione enter para selecionar mais opções...',
        fn: opcao1
    }
}

function opcao1(msg){
    console.log('Não há mais opções!')
    terminal.close()
}

function menuInicial(msg){
    const opcao = Number(msg)

    if(isNaN(opcao)){
        throw new Error('Não é um número', msg)
    }

    switch (opcao){
        case 0:
            console.log('Saindo...')
            terminal.close()
            break;
        case 1:
            console.log('Menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default:
            console.log('Opção invalida!')
            terminal.close();
            break;
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn 
)


