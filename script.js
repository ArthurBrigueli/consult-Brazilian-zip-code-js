const cepinput = document.getElementById("inputmoeda")
const verificar = document.getElementById("verificar")
const resultado = document.getElementById("res")
const rua = document.getElementById("rua")
const cidade = document.getElementById("cidade")
const destrotp = document.getElementById("destrito")
const estado = document.getElementById("estado")
const res = document.getElementById("res")




const getData = async(cep) => {
    const apiURL = `https://cdn.apicep.com/file/apicep/${cep}.json`
    const res = await fetch(apiURL)
    const data = await res.json()
    return data
}




const showData = async (cep) => {
    const data = await getData(cep)
    console.log(data)
    rua.innerText = `Rua: ${data.address}`
    cidade.innerText = `Cidade: ${data.city}`
    destrito.innerText = `Destrito: ${data.district}`
    estado.innerText = `Estado: ${data.state}`
    res.classList.remove("hide")

}




verificar.addEventListener("click", (e) => {
    e.preventDefault()
    const cep = cepinput.value
    showData(cep)

})




cepinput.addEventListener("keyup", (e) => {
    if(e.code === "Backspace"){
        res.classList.add("hide")
    }else if(e.code === "Enter"){
        const cep = cepinput.value
        showData(cep)
    }
})


