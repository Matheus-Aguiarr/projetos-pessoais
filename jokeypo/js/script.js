const optionImages = document.querySelectorAll('.option-image');
const container = document.querySelector('.container');
const resultText = document.querySelector('.result-text');
const userResult = document.querySelector('.user-result img');
const computerResult = document.querySelector('.computer-result img');

const computerImg = ['./imagens/pedra.png', './imagens/papel.png', './imagens/tesoura.png'];

const winner = {
    RR: 'Empate', 
    RP: 'Computador ganhou', 
    RS: 'Você ganhou',
    PP: 'Empate', 
    PR: 'Você ganhou', 
    PS: 'Computador ganhou', 
    SS: 'Empate', 
    SR: 'Computador ganhou', 
    SP: 'Você ganhou' 
    
}

function handleOptionClick(e) {
    const clickedImage = e.currentTarget;
    const userIndex = Array.from(optionImages).indexOf(clickedImage)



    container.classList.add('start');
    resultText.innerHTML = "Jo...Ken...Pow"
    userResult.src = computerResult.src = computerImg[0]
    

    setTimeout(() => {
        container.classList.remove('start');

        userResult.src = computerImg[userIndex];

        const randomNumber = Math.floor(Math.random() * computerImg.length);
        computerResult.src = computerImg[randomNumber];


        const userValue = ['R', 'P', 'S'][userIndex];
        const computerValue = ['R', 'P', 'S'][randomNumber];
        const userComputerResult = userValue + computerValue;
        const finalResult = winner[userComputerResult]
 
        
        
        

        resultText.innerHTML = finalResult;
    }, 2000);
}

optionImages.forEach(img => {
    img.addEventListener('click', handleOptionClick)
})
