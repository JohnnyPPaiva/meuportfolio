let blur = document.querySelector('#home')
let header = document.querySelector('header')
let peito = document.querySelector('.peitoral')
let tricep = document.querySelector('.triceps')
let bicep = document.querySelector('.biceps')
let costa = document.querySelector('.costas')
let perna = document.querySelector('.pernas')
let ombro = document.querySelector('.ombros')
let ext = document.querySelector('.exit')
let chest = document.querySelector('.chests')
let trice = document.querySelector('.tricep')
let bak = document.querySelector('.back')
let bice = document.querySelector('.bicep')
let leg = document.querySelector('.legs')
let shold = document.querySelector('.sholder')
let ficha = document.querySelector('.treino')
let respTreinoPeito = document.querySelector('.respostaTreinoPeito')
let respTreinoTriceps = document.querySelector('.respostaTreinoTriceps')
let respTreinoCostas = document.querySelector('.respostaTreinoCostas')
let respTreinoBiceps = document.querySelector('.respostaTreinoBiceps')
let respTreinoPernas = document.querySelector('.respostaTreinoPernas')
let respTreinoOmbros = document.querySelector('.respostaTreinoOmbros')
let hFichaPeito = document.querySelector('.tituloFichaPeito')
let hFichaTriceps = document.querySelector('.tituloFichaTriceps')
let hFichaCostas = document.querySelector('.tituloFichaCostas')
let hFichaBiceps = document.querySelector('.tituloFichaBiceps')
let hFichaPernas = document.querySelector('.tituloFichaPernas')
let hFichaOmbros = document.querySelector('.tituloFichaOmbros')
let iconPrint = document.querySelector('.print')
let iconReload = document.querySelector('.reload')

let respTreinosPeito = ""
let respTreinosTriceps = ""
let respTreinosCostas = ""
let respTreinosBiceps = ""
let respTreinosPernas = ""
let respTreinosOmbros = ""

let marcador = 0

function training() {
    ficha.classList.toggle('active')
    blur.classList.toggle('active')
    if (marcador == 0) {
        alert("Nenhum exercício foi adicionado até o momento!!")
        location.reload()
        ficha.classList.remove('active')
    }
}

function imprimirTexto() {
    window.print()
}

function reload() {
    location.reload()
}

let supRetoExecutada = false;
function supReto() {

    if (supRetoExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Supino Reto"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}`
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    supRetoExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }

    
}

let supRetoHaltExecutada = false;
function supRetoHalt() {

    if (supRetoHaltExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Supino Reto com Halteres"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}`
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    supRetoHaltExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let flexBracoExecutada = false;
function flexBraco() {

    if (flexBracoExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Flexão de Braços"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}`
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    flexBracoExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let flexBracoInclExecutada = false;
function flexBracoIncl() {
    if (flexBracoInclExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Flexão de Braços Inclinado"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}`
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    flexBracoInclExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let flexBracoSoExecutada = false;
function flexBracoSo() {
    if (flexBracoSoExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Flexão de um braço só"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}`
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    flexBracoSoExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let SupInclExecutada = false;
function SupIncl() {
    if (SupInclExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Supino Inclinado"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}` 
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    SupInclExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let SupInclHaltExecutada = false;
function SupInclHalt() {
    if (SupInclHaltExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Supino Inclinado com halteres"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}`
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    SupInclHaltExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let paralelaExecutada = false;
function paralela() {
    if (paralelaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Mergulho em paralelas"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}`
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    paralelaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let voadorInclExecutada = false;
function voadorIncl() {
    if (voadorInclExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Voador Inclinado na polia"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}`
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    voadorInclExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let crucVoadorExecutada = false;
function crucVoador() {
    if (crucVoadorExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Crucifixo no voador (PeckDeck)"
    respTreinosPeito += rep + descr + "\n"
    respTreinoPeito.innerText = `${respTreinosPeito}`
    hFichaPeito.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    crucVoadorExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPeito.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let extTricepExecutada = false;
function extTricep() {
    if (extTricepExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Extensão de tríceps deitado ou inclinado"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    extTricepExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let supPegFechExecutada = false;
function supPegFech() {
    if (supPegFechExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Supino no banco reto com pegada fechada"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    supPegFechExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let mergBancoExecutada = false;
function mergBanco() {
    if (mergBancoExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Mergulho no banco"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    mergBancoExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let tricepBancoExecutada = false;
function tricepBanco() {
    if (tricepBancoExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Tríceps no banco"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    tricepBancoExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let extHaltExecutada = false;
function extHalt() {
    if (extHaltExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Extensão de halteres sob a cabeça"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    extHaltExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let mergParaleExecutada = false;
function mergParale() {
    if (mergParaleExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Mergulho nas paralelas (com ou sem pesos)"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    mergParaleExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let tricepMaqExecutada = false;
function tricepMaq() {
    if (tricepMaqExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Tríceps na máquina"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    tricepMaqExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let extTriCabExecutada = false;
function extTriCab() {
    if (extTriCabExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Extensão de tríceps na polia com corda"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    extTriCabExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let tricepPolExecutada = false;
function tricepPol() {
    if (tricepPolExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Tríceps na polia com barra"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    tricepPolExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let tricepPolCordExecutada = false;
function tricepPolCord() {
    if (tricepPolCordExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Tríceps na polia com corda"
    respTreinosTriceps += rep + descr + "\n"
    respTreinoTriceps.innerText = `${respTreinosTriceps}`
    hFichaTriceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    tricepPolCordExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaTriceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let barraFixaExecutada = false;
function barraFixa() {
    if (barraFixaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Barra Fixa"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    barraFixaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let barraFixaAbertaExecutada = false;
function barraFixaAberta() {
    if (barraFixaAbertaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Barra Fixa com pegada Aberta"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    barraFixaAbertaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let remadaCurvaExecutada = false;
function remadaCurva() {
    if (remadaCurvaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Remada curvada com barra e pegada pronada"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    remadaCurvaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let remadaCurvaSupExecutada = false;
function remadaCurvaSup() {
    if (remadaCurvaSupExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Remada curvada com barra e pegada supinada"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    remadaCurvaSupExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let remadaUniExecutada = false;
function remadaUni() {
    if (remadaUniExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Remada curvada com barra e pegada supinada"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    remadaUniExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let remadaCavalinhoExecutada = false;
function remadaCavalinho() {
    if (remadaCavalinhoExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Remada Cavalinho"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    remadaCavalinhoExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let remadaBancExecutada = false;
function remadaBanc() {
    if (remadaBancExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Remada no banco inclinado com halteres"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    remadaBancExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let puxadaExecutada = false;
function puxada() {
    if (puxadaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Puxada com barra no pulley"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    puxadaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let remadaBaixaExecutada = false;
function remadaBaixa() {
    if (remadaBaixaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Remada Baixa"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    remadaBaixaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let puxadaFrenteExecutada = false;
function puxadaFrente() {
    if (puxadaFrenteExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Puxada pela frente com o triângulo no pulley"
    respTreinosCostas += rep + descr + "\n"
    respTreinoCostas.innerText = `${respTreinosCostas}`
    hFichaCostas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    puxadaFrenteExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaCostas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaExecutada = false;
function rosca() {
    if (roscaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps direta com barra"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaAmplaExecutada = false;
function roscaAmpla() {
    if (roscaAmplaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps direta com barra e pegada ampla"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaAmplaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaHaltExecutada = false;
function roscaHalt() {
    if (roscaHaltExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps direta com halteres"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaHaltExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaMartExecutada = false;
function roscaMart() {
    if (roscaMartExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps martelo em pé com halteres"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaMartExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaPeExecutada = false;
function roscaPe() {
    if (roscaPeExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps em pé na barra W"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaPeExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaCordaExecutada = false;
function roscaCorda() {
    if (roscaCordaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps no cabo e usando a corda"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaCordaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaBancExecutada = false;
function roscaBanc() {
    if (roscaBancExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps com halteres no banco inclinado"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaBancExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaMartInclExecutada = false;
function roscaMartIncl() {
    if (roscaMartInclExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps martelo no banco inclinado com halteres"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaMartInclExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaScottExecutada = false;
function roscaScott() {
    if (roscaScottExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps apoiado no banco Scott e com a barra EZ"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaScottExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let roscaUniExecutada = false;
function roscaUni() {
    if (roscaUniExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Rosca bíceps concentrada unilateral com halter"
    respTreinosBiceps += rep + descr + "\n"
    respTreinoBiceps.innerText = `${respTreinosBiceps}`
    hFichaBiceps.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    roscaUniExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaBiceps.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let agachaExecutada = false;
function agacha() {
    if (agachaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Agachamento livre com barra"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    agachaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let afundoExecutada = false;
function afundo() {
    if (afundoExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Agachamento afundo com halteres"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    afundoExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let elevacaoExecutada = false;
function elevacao() {
    if (elevacaoExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Elevação de panturrilha em pé no step"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    elevacaoExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let rackExecutada = false;
function rack() {
    if (rackExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Agachamento no rack"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    rackExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let legPressExecutada = false;
function legPress() {
    if (legPressExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Leg press 45º"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    legPressExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let agachaSmithExecutada = false;
function agachaSmith() {
    if (agachaSmithExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Agachamento na máquina Smith"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    agachaSmithExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let stiffExecutada = false;
function stiff() {
    if (stiffExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Stiff"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    stiffExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let flexoraExecutada = false;
function flexora() {
    if (flexoraExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Mesa Flexora"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    flexoraExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let adutoraExecutada = false;
function adutora() {
    if (adutoraExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Cadeira Abdutora / Adutora (Cada)"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    adutoraExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let extensoraExecutada = false;
function extensora() {
    if (extensoraExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Cadeira Extensora"
    respTreinosPernas += rep + descr + "\n"
    respTreinoPernas.innerText = `${respTreinosPernas}`
    hFichaPernas.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    extensoraExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaPernas.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let desenvExecutada = false;
function desenv() {
    if (desenvExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Desenvolvimento de ombros com halteres"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    desenvExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let desenvBarraExecutada = false;
function desenvBarra() {
    if (desenvBarraExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Desenvolvimento de ombros com barra"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    desenvBarraExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let arnoldExecutada = false;
function arnold() {
    if (arnoldExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Desenvolvimento Arnold para ombros"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    arnoldExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let elevLatExecutada = false;
function elevLat() {
    if (elevLatExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Elevação lateral de ombros com halteres"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    elevLatExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let crucifixoExecutada = false;
function crucifixo() {
    if (crucifixoExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Crucifixo invertido com halteres"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    crucifixoExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let remadaAltaExecutada = false;
function remadaAlta() {
    if (remadaAltaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Remada alta em pé com halteres"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    remadaAltaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let remadaAltaCaboExecutada = false;
function remadaAltaCabo() {
    if (remadaAltaCaboExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Remada alta no cabo"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    remadaAltaCaboExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let voadorInvertExecutada = false;
function voadorInvert() {
    if (voadorInvertExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Voador invertido na máquina"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    voadorInvertExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let elevLatPoliaExecutada = false;
function elevLatPolia() {
    if (elevLatPoliaExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Elevação lateral na polia"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    elevLatPoliaExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

let elevFrontalExecutada = false;
function elevFrontal() {
    if (elevFrontalExecutada) {
        alert("Você já adicionou esse exercício");
        return;
    }
    const rep = prompt("Quantas Séries desse exercício?: ")
    if (rep === null) {
        return;
    }
    const descr = " Séries de Elevação Frontal"
    respTreinosOmbros += rep + descr + "\n"
    respTreinoOmbros.innerText = `${respTreinosOmbros}`
    hFichaOmbros.classList.remove('active')
    iconPrint.classList.remove('active')
    iconReload.classList.remove('active')
    elevFrontalExecutada = true;
    marcador = 1
    if (marcador == 1) {
        hFichaOmbros.classList.toggle('active')
        iconPrint.classList.toggle('active')
        iconReload.classList.toggle('active')
    }
}

function peitoral() {
    peito.classList.toggle('active')
    blur.classList.toggle('active')
    chest.classList.toggle('active')
}

function triceps() {
    tricep.classList.toggle('active')
    blur.classList.toggle('active')
    trice.classList.toggle('active')
}

function biceps() {
    bicep.classList.toggle('active')
    blur.classList.toggle('active')
    bice.classList.toggle('active')
}

function costas() {
    costa.classList.toggle('active')
    blur.classList.toggle('active')
    bak.classList.toggle('active')
}

function pernas() {
    perna.classList.toggle('active')
    blur.classList.toggle('active')
    leg.classList.toggle('active')
}

function ombros() {
    ombro.classList.toggle('active')
    blur.classList.toggle('active')
    shold.classList.toggle('active')
}



