function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`); //qual foi o jogo pelo id
    let imagem = gameClicado.querySelector('.dashboard__item__img'); //pega a imagem do jogo (o . seleciona a classe)
    let botao = gameClicado.querySelector('.dashboard__item__button'); //Pegar o botão do jogo (o . seleciona a classe)

    
    if(imagem.classList.contains('dashboard__item__img--rented')){  // se na classe contém (...)
        imagem.classList.remove('dashboard__item__img--rented');  //remova
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar'; //troca o texto
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return')
    }
}



