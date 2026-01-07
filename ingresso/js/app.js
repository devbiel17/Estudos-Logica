function comprar(){
    //recuperar valores (tipo, quantidade)
    let tipo =  document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    // Verificar se a quantidade inserida é válida
    if (isNaN(qtd) || qtd <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    //verifica a quantidade disponivel
    if (tipo == 'pista') {
        comprarPista (qtd);
    } else if (tipo == 'superior'){
        comprarSupreior(qtd)
    } else {
        comprarInferior(qtd)
    }
        
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista){
        alert('Quantidade indisponivel para Pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra rezalizada com sucesso!');
    }
}

function comprarSupreior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior){
        alert('Quantidade indisponivel para Superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra rezalizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior){
        alert('Quantidade indisponivel para Superior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra rezalizada com sucesso!');
    }
}