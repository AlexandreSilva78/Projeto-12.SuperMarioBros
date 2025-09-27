
const form = document.querySelector(".fale-conosco")
const formMascara = document.querySelector(".marcara-formulario")
const saiMascara = document.querySelector(".marcara-formulario")

function entreEmContato() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    formMascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    formMascara.style.visibility = "hidden"

}
