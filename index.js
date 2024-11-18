var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = Window.document.GetElementById("Leonardo")
var Samantha = Window.document.GetElementById("Samantha")
var Bruna = Window.document.GetElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function Rolarparaadireita() {
    Leonardo.style ="display: none"
    Bruna.style ="display: flex"
    setaDireita.style = "display:none"
    setaEsquerda.style ="display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaDireita.style = "display: none"
}

