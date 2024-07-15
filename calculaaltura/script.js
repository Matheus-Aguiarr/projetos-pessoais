const alturaPai = document.querySelector('#paitxt');
const alturaMae = document.querySelector('#maetxt');
const res = document.querySelector('#resultado');
const check = document.getElementById('switch')


function homem() {
    let resultadoM = (Number(alturaPai.value) + Number(alturaMae.value)) / 2 + 6.5; 
    res.innerHTML = `Seu filho terá ${resultadoM}cm`
    if (alturaMae.value == 0 || alturaPai.value == 0) {
        res.innerHTML = ' <strong> Erro</strong>. Altura do <span class = "pai"> PAI </span>ou<span class = "mae"> MÃE </span>inválidas.';
    }
    
    
}

function mulher() {
    let resultadoF = (Number(alturaPai.value) + Number(alturaMae.value)) / 2 - 6.5;
    res.innerHTML = `Sua filha terá ${resultadoF}cm.`
    if (alturaPai.value == 0 || alturaMae.value == 0) {
        res.innerHTML = ' <strong>Erro</strong>. Altura do <span class = "pai"> PAI </span>ou<span class = "mae"> MÃE </span>inválidas.';
    }
    
    
    
}

check.addEventListener('change', () => {
    document.body.classList.toggle('temaclaro')
    document.getElementById('calculator').classList.toggle('temaclaro')
    document.getElementById('h1').classList.toggle('temaclaro')
    document.getElementById('input').classList.toggle('temaclaro')
    document.getElementById('input-mae').classList.toggle('temaclaro')
    document.getElementById('gender').classList.toggle('temaclaro')
    document.getElementById('pai').classList.toggle('temaclaro')
    document.getElementById('mae').classList.toggle('temaclaro')
    document.querySelector('#cm').classList.toggle('temaclaro')
    document.getElementById('cm2').classList.toggle('temaclaro')
})
