let jogosAlugados = 0

function imprimirJogosAlugados(){
    console.log(`Numero de Jogos Alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`); //qual foi o jogo pelo id
    let imagem = gameClicado.querySelector('.dashboard__item__img'); //pega a imagem do jogo (o . seleciona a classe)
    let botao = gameClicado.querySelector('.dashboard__item__button'); //Pegar o botão do jogo (o . seleciona a classe)

    
    if(imagem.classList.contains('dashboard__item__img--rented')){  // se na classe contém (...)
        alert('Clique em "OK" para confirmar');
        imagem.classList.remove('dashboard__item__img--rented');  //remova
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar'; //troca o texto
        jogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;
    }
    imprimirJogosAlugados();
}

//inicia a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function(){
    jogosAlugados = document.querySelectorAll ('.dashboard__item__img--rented').length;
    imprimirJogosAlugados();
})



