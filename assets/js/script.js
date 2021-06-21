/*  
var - escopo global
let - escopo local
const - escopo global (ela nao muda o seu valor)

algumas formas de acessar o DOM
por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector() 

innerHTML = colocando um valor 
indexof() = descobrir o que tem dentro do texto (1 = true ou -1 = false)
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
const validaemailjs = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; /*expressao regular*/
let nomeOk = false
let emailOk = false
let textoOk = false

function validaNome() {
    // let txtNome = document.querySelector('.txttexto')
    if (nome.value.length == 0) {
        nome.style.border = ' 1.5px solid black'
    } else if (nome.value.length < 3) {
        nome.style.border = ' 2.5px solid red'
    } else {
        nome.style.border = ' 2.5px solid green'
    }
}

function validaEmail() {
    // let txtEmail = document.querySelector('.txtemail')
    if (email.value.length == 0) {
        email.style.border = ' 1.5px solid black'
    } else if (email.value.match(validaemailjs)) {
        email.style.border = ' 2.5px solid green'
        emailOk = true
    } else {
        email.style.border = ' 2.5px solid red'
    }
}

function validaAssunto() {
    // let txtAssunto = document.querySelector('.txtassunto')
    if (assunto.value.length >= 100) {
        assunto.style.border = ' 2.5px solid red'
    } else {
        assunto.style.border = ' 1.5px solid black'
        textoOk = true
    }
}

function enviar() {
    if (nomeOk && emailOk && textoOk) {
        alert('Formulario enviado')
    } else {
        alert('Preencha todos os campos corretamente')
    }
} 

function bostaGonza() {
    let bostinhaGonza = document.querySelector('.gonza')
    let bostaoGonza = document.querySelector('#menu')

    bostinhaGonza.classList.toggle('ativo')
    bostaoGonza.classList.toggle('desativado')
    
}