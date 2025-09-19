# Lista de Amigos

> Projeto simples para aprender JavaScript: adicionar nomes de amigos, mostrar lista e sortear um amigo aleatório.

---

## Índice

- [Descrição do Projeto](#descrição-do-projeto)  
- [Funcionalidades](#funcionalidades)  
- [Como executar](#como-executar)  
- [Tecnologias utilizadas](#tecnologias-utilizadas)  
- [Status do Projeto](#status-do-projeto)  
- [Autor](#autor)  
- [Licença](#licença)  

---

## Descrição do Projeto

Este é um projeto de nível iniciante que permite ao usuário:

- Inserir nomes de amigos em um campo de texto.  
- Validar se o campo não está vazio antes de adicionar.  
- Mostrar todos os nomes adicionados em uma lista visível.  
- Sortear aleatoriamente um amigo dentre os que foram adicionados.  

O objetivo é praticar manipulação de DOM, arrays, eventos e funções básicas em JavaScript.

---

## Funcionalidades

- Captura o valor do campo de entrada via `document.getElementById` ou `document.querySelector`.  
- Validação para garantir que o nome não seja vazio (mostra alerta se estiver vazio).  
- Armazenamento dos nomes em um array usando `.push()`.  
- Limpa o campo de entrada depois de adicionar.  
- Exibe a lista de amigos atualizada, limpando a lista anterior para evitar duplicação.  
- Sorteia aleatoriamente um amigo usando `Math.random()` e `Math.floor()`.  
- Mostra o resultado do sorteio na página.

---

## Como executar

1. Clone este repositório para sua máquina:

   > git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até a pasta do projeto:

    > cd nome-do-projeto

3. Abra o index.html no seu navegador.

4. Digite um nome no campo de texto e clique em “Adicionar”. Veja os nomes aparecerem na lista.

5. Clique no botão “Sortear amigo” para escolher alguém aleatoriamente dentre os adicionados.

---

## Tecnologias utilizadas

- HTML5 para a estrutura da página
- CSS3 para estilização
- JavaScript (Vanilla) para a lógica de adicionar nomes e sortear

---

## Status do Projeto

<h4 align="center"> 
	:construction:  Projeto Concluído  :construction:
</h4>

---

## Autor

Feito por Caio Ribeiro de Oliveira
[Meu Github](https://github.com/caieteC137)

---

## Licença

Este projeto está sob a licença MIT — veja o arquivo LICENSE para mais detalhes.
