let amigos = []

function adicionarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if(nomeAmigo === ''){
       alert('Por favor, insira um nome.');
       return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarLista();
}

function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        const itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Adicione um amigo antes de sortear.');
        return;
    }
    const sorteioAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[sorteioAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}