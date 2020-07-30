class JogoDaMemoria {
    constructor ({tela}){
        this.tela = tela

        //caminho do aquivo, sempre relativo 
        //ao index.html
        this.heroisIniciais = [
            {img: './arquivos/1.png', name: '1'},
            {img: './arquivos/2.png', name: '2'},
            {img: './arquivos/3.png', name: '3'},
            {img: './arquivos/4.png', name: '4'}
        ]
        this.iconPadrao ='./arquivos/0.jpeg'
        this.heroisEscondicos = []
    }
    //para usar o this, não precisa usar o static
    inicializar(){
        //vai pegar todas as funçoes da classe tela
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //força a tela a usar o this de jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))

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

     jogar(){
         console.log('clicou')
         this.embaralhar()
     }

}