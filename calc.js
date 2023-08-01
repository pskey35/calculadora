const boton = document.querySelectorAll(".boton")
const input = document.querySelector(".container3__uno")
const input2 = document.querySelector("div.container3__dos")
const botonIgual = document.querySelector("div.container4__cuatro > div:nth-child(5)")
const emeMas = document.querySelector("div > div.container4__dos > div:nth-child(1)")
const emeErre = document.querySelector("div > div.container4__cuatro > div:nth-child(1)")
const borrarX = document.querySelector("div.container4__cuatro > div:nth-child(2)")
const clear = document.querySelector("div.container__4 > div > div.container4__uno > div:nth-child(2)")
const memoryClear = document.querySelector("div > div.container4__uno > div:nth-child(1)")
const emeMenos = document.querySelector("div > div.container4__tres > div:nth-child(1)")

for (let i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", e => {
        numero = e.target.textContent

        input.textContent += numero
        a = eval(input.textContent)


    })
}


botonIgual.addEventListener("click", e => {
    input2.textContent = a
})

memoria = null
emeMas.addEventListener("click", e => {
    memoria = input.textContent

})

//cortamos el texto
function cortar(texto, num) {
    data = ""
    for (let i = 0; i < texto.length - num; i++) {
        data += texto[i]
    }

    return data
}

//por cada vez que se de click en x esto borrara algo
borrarX.addEventListener("click", e => {
    b = input.textContent
    v = cortar(b, 1)
    input.textContent = v
})


clear.addEventListener("click", e => {
    input.textContent = ""
})

memoryClear.addEventListener("click", e => {
    memoria = 0
})

emeErre.addEventListener("click", e => {
    input.textContent = memoria
})

//falta arreglar esto el del menos..
emeMenos.addEventListener("click", e => {
    memoria = cortar(memoria.toString(), 1)
})