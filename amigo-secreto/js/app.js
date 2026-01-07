let amigos = [];

function adicionar() {
    let amigoInput = document.getElementById('nome-amigo');

    // 🔹 Converte para MAIÚSCULO e remove espaços
    let amigo = amigoInput.value.trim().toUpperCase();

    if (amigo == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(amigo)) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo);

    if (lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }

    amigoInput.value = '';
}


function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}