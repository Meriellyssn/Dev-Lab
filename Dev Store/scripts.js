const prevButton = document.getElementById("prev"); // Botão de navegação anterior
const nextButton = document.getElementById("next"); // Botão de navegação próximo
const items = document.querySelectorAll(".item"); // Itens do carrossel
const dots = document.querySelectorAll(".dot"); // Pontos indicadores
const numberIndicator = document.querySelector(".numbers"); // Indicador numérico
const list = document.querySelector(".list"); // Lista de itens do carrossel
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("header nav");

let active = 0; //Variavel para rastrear o índice atual
const total = items.length; // Total de itens no carrossel
let timer; // Variável para o temporizador de autoplay

function update(direction) {
  document.querySelector(".item.active").classList.remove("active"); // Remove a classe ativa do item atual
  document.querySelector(".dot.active").classList.remove("active"); // Remove a classe ativa do ponto atual

  if (direction > 0) {
    // Se a direção for positiva (próximo)
    active = active + 1;

    if (active === total) {
      active = 0; // Volta para o primeiro item
    }
  } else if (direction < 0) {
    // Se a direção for negativa (anterior)
    active = active - 1;

    if (active < 0) {
      active = total - 1; // Vai para o último item
    }
  }

  items[active].classList.add("active"); // Adiciona a classe ativa ao novo item
  dots[active].classList.add("active"); // Adiciona a classe ativa ao novo ponto

  numberIndicator.textContent = String(active + 1).padStart(2, "0"); // Atualiza o indicador numérico com dois dígitos
}

clearInterval(timer); // Limpa o temporizador anterior
setInterval(() => {
  update(1); // Chama a função update a cada 5 segundos para autoplay
}, 8000);

prevButton.addEventListener("click", () => {
  // Evento de clique no botão anterior
  update(-1);
});

nextButton.addEventListener("click", () => {
  // Evento de clique no botão próximo
  update(1);
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});
