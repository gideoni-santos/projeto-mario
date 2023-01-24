console.log('Mostrar o document',document);


// Passo 1 - Pegar o elemento que representa o botão na tela usando o JS
console.log(document.querySelector('.botao'));
const botaoTrailer = document.querySelector('.botao');

// Passo 2 - Indentificar quando o usuario clicar no botão
botaoTrailer.addEventListener("click", () => {
    // Passo 4 - Abrir a Modal na tela
    modal.classList.add("aberto")
        // Passo 9 - Mostar novamente a modal quando clicar no botao novamente
        video.setAttribute("src", LinkDoVideo)
        
});

// Passo 3 - Pegar o elemento da modal no JS
const modal = document.querySelector('.modal');

// Passo 5 - Pegar o elemento de fechar modal usando JS
const botaoFecharModal = document.querySelector('.fechar-modal');

// Passo 6 - Identificar quando o usuario clicar no X
botaoFecharModal.addEventListener("click", () => {
    // Passo 7 - Fechar a modal
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
});

// Passo 8 - Parar o video quando clicar no X
const video = document.getElementById("video")

//Passo 9 
const LinkDoVideo = video.src;


