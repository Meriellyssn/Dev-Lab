const mobileBtn = document.querySelector('.btn-mobile'); // Seleciona o botão de menu mobile
const navLinks = document.getElementById('nav-liks'); // Seleciona a lista de links de navegação
const icon = mobileBtn.querySelector('.btn-mobile i'); // Seleciona o ícone dentro do botão

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Alterna a classe 'active' para mostrar/ocultar o menu
    icon.classList.toggle('fa-times'); // Alterna o ícone para o menu de fechar
    icon.classList.toggle('fa-bars'); // Alterna o ícone para o menu de abrir
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header'); // Seleciona o cabeçalho

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)'; // Adiciona sombra ao cabeçalho quando a página é rolada
    } else {
        header.style.boxShadow = 'none'; // Remove a sombra quando estiver no topo da página
    }
})