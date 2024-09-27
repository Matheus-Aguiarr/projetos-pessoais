function trocaCor(cor) {
    document.body.style.backgroundImage = 'none';
    const color = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color == cor ? '' : cor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

function corAleatoria() {
    document.body.style.backgroundImage = 'none';
    const r = getRandomNumber();    
    const g = getRandomNumber();
    const b = getRandomNumber();
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        aplicarCor();
    }
    
})

function aplicarCor() {
    document.body.style.backgroundImage = 'none';
    const inputColor = document.getElementById('input-color');
    const color = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color == inputColor.value ? '#000' : inputColor.value
}

function chooseImg(img) {
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgBack = document.body.style.backgroundImage;
        document.body.style.backgroundImage = `url('${e.target.result}')`;
    }

    reader.readAsDataURL(img) 
    
}
 

