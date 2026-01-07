let totalGeral;
limpar();

function adicionar() {
    //recuperar valores(nome, produto e quantidade)
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    //verificar se o produto é valido
    if (!produto || produto.trim() == ''){
        alert('Selecione um produto válido');
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0]
    let valorUnitario = produto.split('R$')[1]

    //calcurar preço (subtotal)
    let preco = quantidade * valorUnitario;


    //adicionar no carrinho
    let carrinho = document.getElementById ('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`;

    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';

}


function limpar(){
    totalGeral = 0;
    document.getElementById ('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '$0';


}