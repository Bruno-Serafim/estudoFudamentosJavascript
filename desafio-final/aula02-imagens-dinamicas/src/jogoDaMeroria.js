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

     }

}