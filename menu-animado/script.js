document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".botao-menu");
    const menuLateral = document.querySelector('.menu-lateral');
    const conteudo = document.querySelector('.conteudo');
    const background = document.querySelector('.background');



    
    button.addEventListener('click', () => {
        menuLateral.classList.toggle('ativo');
        conteudo.classList.toggle('ativo');
        button.classList.toggle('ativo');
        background.classList.toggle('ativo')
        document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1'

      
    })

    
});
