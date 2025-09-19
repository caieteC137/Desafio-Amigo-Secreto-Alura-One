//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Cria um array vazio para armazenar os nomes
let amigos = [];

// Função para adicionar amigos na lista
function adicionarAmigo() {
    // Pega o valor digitado no input
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // remove espaços extras

    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar!");
        return;
    }

    // Adiciona o nome no array
    amigos.push(nome);

    // Atualiza a lista visível na tela
    mostrarLista();

    // Limpa o campo de texto para o próximo nome
    input.value = "";
    input.focus();
}

// Função para mostrar os nomes na lista
function mostrarLista() {
    // Captura a <ul> onde os nomes serão exibidos
    var lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de atualizar
    lista.innerHTML = "";

    // Percorre o array e adiciona cada nome como <li>
    for (var i = 0; i < amigos.length; i++) {
        var item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}