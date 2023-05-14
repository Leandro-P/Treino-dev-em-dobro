const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroAtivo) {
    imagemTrocaDeTema.setAttribute("src", "./imagens/sun.png");
  } else {
    imagemTrocaDeTema.setAttribute("src", "./imagens/moon.png");
  }
});
