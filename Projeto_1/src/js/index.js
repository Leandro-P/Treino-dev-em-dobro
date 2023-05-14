// passo 1 pegar os elementos de html dos botões
const carousselButton = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");

// identificar o clique do usuário nos botões
carousselButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    // passo 3 desmarcar o botão anterior
    const selectedButton = document.querySelector(".selected");
    selectedButton.classList.remove("selected");
    // passo 4 marcar próximo botão como selecionado
    button.classList.add("selected");
    // passo 5 esconder a imagem anterior
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
    // passo 6 fazer aparece a imagem respectiva ao botão
    images[index].classList.add("active");
  });
});
