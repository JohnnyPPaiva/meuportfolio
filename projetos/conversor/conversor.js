const frm = document.querySelector("form")
const resp = document.querySelector("#outDec")
const respBin = document.querySelector("#outBin")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numDec = Number(frm.inNumero.value)
    const numBin = Number(frm.inNumeroBin.value)
    const stringBin = numBin + ""
    const invertBin = stringBin.split("").reverse().join("")
    let dec = 0
    let resposta = ""

    for (let i = numDec ; i >= 1 ; i/=2) {
        const flr = Math.floor(i)
        const div = flr % 2
        resposta += div
    }
    let invert = resposta.split("").reverse().join("")
    resp.innerText = `${numDec} em binário é: ${invert}`

    if (! /^[01]+$/.test(invertBin)) {
        alert("Gentileza informar um número binário (contendo somente 0 ou 1)"); 
        location.reload()   
    }

    for (let c = 0 ; c < invertBin.length ; c++) {
        if (invertBin[c] === '1') {
            dec += Math.pow(2, c)

            }
    } 
    
    respBin.innerText = `O número binário ${numBin} em decimal é: ${dec}`

    frm.btLimpar.addEventListener("click", () => {
        location.reload()
    })
    
    
})