//enquanto não mudar, não para!

let termoParada = true
let contador = 0;

while (termoParada){
    termoParada = contador < 10
    if(contador % 2 === 0){
        console.log('Numero par', contador)
    }
    contador += 1
    //contador = contador + 1
}

//roda a primeira vez e teste a variavel depois
do{
    console.log('Só uma vez! pois o termo de parada é: ', termoParada)

}while(termoParada)


while(termoParada){
    //não vai executar
    console.log('Nem vai executar')
}

