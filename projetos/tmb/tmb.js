const frm = document.querySelector('form')
const respTmb = document.querySelector('.tmbFinal')
const respGasto = document.querySelector('.gastoFinal')
let div = document.querySelector('.result')
let blur = document.querySelector('.geral')
let header = document.querySelector('.header')
let oque = document.querySelector('.menuOque')
let image = document.querySelector('.imagem')
let calc = document.querySelector('.menuCalc')
let influ = document.querySelector('.menuInflu')
let aument = document.querySelector('.menuAument')
let menuToggle = document.querySelector('.mobile-menu')
let headerToggle = document.querySelector('.headerToggle')

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    div.classList.toggle('active')
    blur.classList.toggle('active')
    header.classList.toggle('active')
    image.classList.toggle('active')
    headerToggle.classList.remove('active')
    
    const peso = Number(frm.inPeso.value)
    const altura = Number(frm.inAltura.value)
    const idade = Number(frm.inIdade.value)
    const masculino = frm.inRadioMasc.checked
    let tmb = 0
    let resposta = 0

    if (masculino) {
        tmb = (66 + (13.7 * peso)+(5 * altura)-(6.8 * idade))
     } else {
         tmb = (655 + (9.6 * peso)+(1.8 * altura)-(4.7 * idade))
     }

     respTmb.innerText = `${tmb.toFixed(0)}`

     if (inRadioSed.checked) {
        resposta = tmb * 1.2
        respGasto.innerText = `${resposta.toFixed(0)}`
     }

     if (inRadioLev.checked) {
        resposta = tmb * 1.375
        respGasto.innerText = `${resposta.toFixed(0)}`
     }

     if (inRadioMode.checked) {
        resposta = tmb * 1.55
        respGasto.innerText = `${resposta.toFixed(0)}`
     }

     if (inRadioMuit.checked) {
        resposta = tmb * 1.725
        respGasto.innerText = `${resposta.toFixed(0)}`
     }

     if (inRadioExt.checked) {
        resposta = tmb * 1.9
        respGasto.innerText = `${resposta.toFixed(0)}`
     }
})

function recarregar() {
      location.reload()
}

function oquee() {
      header.classList.toggle('active')
      blur.classList.toggle('active')
      image.classList.toggle('active')
      oque.classList.toggle('active')
      menuToggle.classList.toggle('active')
}

function calcular() {
      header.classList.toggle('active')
      blur.classList.toggle('active')
      image.classList.toggle('active')
      calc.classList.toggle('active')
      menuToggle.classList.toggle('active')
}

function influencia () {
      header.classList.toggle('active')
      blur.classList.toggle('active')
      image.classList.toggle('active')
      influ.classList.toggle('active')
      menuToggle.classList.toggle('active')
}

function aumentar () {
   header.classList.toggle('active')
   blur.classList.toggle('active')
   image.classList.toggle('active')
   aument.classList.toggle('active')
   menuToggle.classList.toggle('active')
}

menuToggle.onclick = function(){
   headerToggle.classList.toggle('active')
}