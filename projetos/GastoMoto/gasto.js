const frm = document.querySelector("form")
const resp = document.querySelector("#spanResp")
const resp1 = document.querySelector("#spanResp1")
const blur = document.querySelector(".principal")
const divResp = document.querySelector(".resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    divResp.classList.toggle('active')
    blur.classList.toggle('active')

    const consumo = Number(frm.inConsumo.value)
    const valorComb = Number(frm.inVcomb.value)
    const km = Number(frm.inKm.value)
    const fatura = Number(frm.inFatura.value)
    const conGas = valorComb / consumo 
    const conMotoGeral = km * conGas
    const ganhos = fatura - conMotoGeral
    const valorApp = fatura / km

    if(valorApp < 1) {
        resp1.style.color="red"
    }else{
        resp1.style.color="green"
    }

    resp.innerText = `-O valor gasto de combustível hoje foi de aprox.: R$${conMotoGeral.toFixed(2)}\n-\n -Tirando os gastos, você ganhou aprox.: R$${ganhos.toFixed(2)}\n-\n` 
    resp1.innerText = `-Você ganhou: R$${valorApp.toFixed(2)} por km rodado hoje\n`
    
})

function voltar() {
    divResp.classList.toggle('active')
    blur.classList.toggle('active')
}

