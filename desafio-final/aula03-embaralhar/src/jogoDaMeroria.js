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

     }

     jogar(){
         console.log('clicou')
         this.embaralhar()
     }

}