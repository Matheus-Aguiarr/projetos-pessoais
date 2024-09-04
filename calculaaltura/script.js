const heightMom = document.getElementById('maetxt');
const heightDad = document.getElementById('paitxt');
const res = document.querySelector('#resultado');
const check = document.getElementById('switch');
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', getGender = (e) => {
    if (e.target.innerHTML === 'Feminino') {
        let heightBaby = (Number(heightDad.value) + Number(heightMom.value)) / 2 - 6.5;
        res.innerHTML = `Sua filha terá ${heightBaby.toFixed(1)}cm de altura.`
    } else {
        let heightBaby = (Number(heightDad.value) + Number(heightMom.value)) / 2 + 6.5;
        res.innerHTML = `Seu filho terá ${heightBaby.toFixed(1)}cm de altura.`
    }
    if (heightDad.value == 0 || heightMom.value == 0) {
        res.innerHTML = ' <strong>ERRO</strong>. Altura do <span class = "pai"> PAI</span> ou <span class = "mae"> MÃE </span> inválidas.'
    }
})

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