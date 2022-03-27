let nome = null
let red = null
let mat = null
let port = null
let nat = null
let hum = null
let med = (red*2 + mat*4 + port*2 + nat + hum)/10

function adicionar(){
    nome = prompt("Nome do aluno: ")
    red = prompt("Nota de Redação: ")
    mat = prompt("Nota de Matemática: ")
    port = prompt("Nota de Português: ")
    nat = prompt("Nota de Ciências Naturais: ")
    hum = prompt("Nota de Ciência Humanas: ")
}

lista = {
    nome: nome,
    redacao: red,
    matematica: mat,
    portugues: port,
    natureza: nat,
    humanas: hum,
    media: med
}

listaAluno = []
listaAluno = listaAluno.push(lista)

let comando = null

while (comando != "fechar"){
     comando = prompt(`Digite se quer "ver" ou "adicionar" uma nota ou "fechar" o programa: `).toLowerCase()
    
    if (comando == "ver"){
        if (listaAluno.length == 0){
            console.log("Lista Vazia")
        } else {
            for (let c = 0; c < listaAluno.length; c++){
                console.log(listaAluno[c])
            }
        }
    } else if (comando == "adicionar"){
        adicionar()
    } else {
        console.error("Erro");
    }
}

