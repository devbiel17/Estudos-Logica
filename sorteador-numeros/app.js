function sortear(){
    let quantidade = parseInt (document.getElementById ('quantidade').value);
    let de = parseInt (document.getElementById ('de').value);
    let ate = parseInt (document.getElementById ('ate').value);

    if (de >= ate){
        alert ('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if(quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
    }


    let sorteados = []; 
    let numero;

    for(let i = 0; i < quantidade; i++){    //loop for (i recebe zero, enquanto i < que a quantidade, adicione mais 1)
        numero = gerarNumeroAleatorio(de, ate); 

        while(sorteados.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);
        }

        sorteados.push(numero); // adiciona na lista
    }

    let resultado = document.getElementById ('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){  //se tiver desabilitado
        botao.classList.remove('container__botao-desabilitado');  // remove a classe
        botao.classList.add ('container__botao'); //adicone isso
        
    }else{
         botao.classList.remove ('container__botao')
         botao.classList.add('container__botao-desabilitado')
    
    }
}

function reiniciar(){
    document.getElementById ('quantidade').value = '';
    document.getElementById ('de').value = '';
    document.getElementById ('ate').value = '';
    document.getElementById ('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
