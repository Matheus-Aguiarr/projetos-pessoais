const alturaPai = document.querySelector('#paitxt');
const alturaMae = document.querySelector('#maetxt');
const res = document.querySelector('#resultado');



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


