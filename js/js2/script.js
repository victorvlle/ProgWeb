let perdeu = 1;
let pontuacao = 0;

let jogada = [
    "Papel", "Pedra", "Tesoura"
];

function verificaJogada(jogadaUsuario, jogadaRobo){
    if((jogadaUsuario == 0 && jogadaRobo == 1) || (jogadaUsuario == 1 && jogadaRobo == 2) || (jogadaUsuario == 2 && jogadaRobo ==0)){
        return 1;
    }else if(jogadaUsuario == jogadaRobo){
        return 2;
    }else{
        return 0;
    }
}

function mostraResultado(jogadaUsuario){
    let jogadaRobo = Math.floor(Math.random()*3);

    console.log(`O computador jogou ${jogada[jogadaRobo]}`);

    if(verificaJogada(jogadaUsuario, jogadaRobo) == 1){
        console.log("Você ganhou!");
        pontuacao++;
        return 1;
    }else if(verificaJogada(jogadaUsuario, jogadaRobo) == 2){
        console.log("A rodada empatou!");
        return 1;
    }else{
        console.log(`Você perdeu! A sua pontuação foi de ${pontuacao}`)
        return 0;
    }
}

while(perdeu == 1){
    console.log("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura");
    jogadaUsuario = (parseInt(prompt()))-1;
    perdeu = mostraResultado(jogadaUsuario);
}