const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"

class Tela {
    static obterCodigoHtml(item){
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img src="${item.img}" name="${item.nome}"class="card-img-top" alt="...">
            </div>
            <br>
        </div>
        `
    }
    static alterarConteudoHTML(codigoHtml){
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringPelaImagem(itens){
        //para cada item da lista, vai executar a funcao obterCodigoHtml
        //ao final vai concaternar tudo em uma string
        return itens.map(Tela.obterCodigoHtml).join('')

    }
    static atualizarImagens(itens){
        const codigoHtml = Tela.gerarStringPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
    static configurarBotaoJogar(funcaoOnclick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnclick
    }

}