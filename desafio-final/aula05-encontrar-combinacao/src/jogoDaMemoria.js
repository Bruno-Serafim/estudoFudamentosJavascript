class JogoDaMemoria {
    constructor ({tela}){
        this.tela = tela

        //caminho do aquivo, sempre relativo 
        //ao index.html
        this.heroisIniciais = [
            {img: './arquivos/1.png', nome: '1'},
            {img: './arquivos/2.png', nome: '2'},
            {img: './arquivos/3.png', nome: '3'},
            {img: './arquivos/4.png', nome: '4'}
        ]
        this.iconPadrao ='./arquivos/0.jpeg'
        this.heroisEscondicos = []
        this.heroisSelecionados = []
    }
    //para usar o this, não precisa usar o static
    inicializar(){
        //vai pegar todas as funçoes da classe tela
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //força a tela a usar o this de jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))

     }

     embaralhar(){
         const copias = this.heroisIniciais
         //duplicar itens 
         .concat(this.heroisIniciais)

         //entrar em cada identificador e criar um id aleatório
         .map(item => {
             return Object.assign({}, item, {id: Math.random() /0.5})
         })
         //ordenar aleatóriamente
         .sort(() => Math.random() - 0.5)

         this.tela.atualizarImagens(copias)
         //vamos esperar 1 segundo para atualizar a tela
         setTimeout(() => {
             this.esconderHerois(copias)             
         }, 1000);

     }
     
     esconderHerois(herois){
         //vamos trocar a imagem de todos os herois existentes
         //pelo icone padrão
         //como fizemos no construtor, vamos extrair somente o necessário 
         //usando a sintaxe ({chave: 1}) estamos falando que vamos retornar 
         //o que tiver dentro do parenteses
         //quando não usamos : (exemplo do id), o JS entende que o nome
         //é o mesmo do valor. Ex. id: id, vira id,
         const heroisOcultos = herois.map(({nome, id}) => ({
             id,
             nome, 
             img: this.iconPadrao
         }))
        //autalizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        //guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
     }

     verificarSelecao(id, nome){
         const item = {id, nome}
         /**
          * vamos verificar a quantidade de herois selecionados
          * e tomar ação se escolheu certo ou errado
          */
         const heroisSelecionados = this.heroisSelecionados.length
         switch (heroisSelecionados){
             case 0:
                 //adiciona a escolha na lista, esperando pela proxima
                 //clicada
                 this.heroisSelecionados.push(item)
                 break;
            case 1: 
                /**
                 * se a quantidade de escolhidos for 1, significa
                 * que o usuario só pode escolher mais um 
                 * vamos obter o primeiro da lista
                 */
                const [opcao1] = this.heroisSelecionados
                //zerar itens para não selecionar mais de dois
                this.heroisSelecionados = []
                /**
                 * conferimos se os nomes e ids batem conforme
                 * o esperado
                 */
                if(opcao1.nome === item.nome &&
                /**
                 *aqui verificamos se são ids diferentes para 
                 o usuario não clicar duas vezes no mesmo
                 */
                opcao1.id !== item.id 
                 ){
                     alert('combinação correta!' + item.nome)
                     //para a execução
                     return;
                 }

                 alert('Combinação incorreta')
                 //fim do case!
                 break;
         }

     }

     jogar(){
         console.log('clicou')
         this.embaralhar()
     }

}