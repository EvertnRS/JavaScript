let nome = null
let red = null
let mat = null
let port = null
let nat = null
let hum = null
let med = null

function adicionar(){
    nome = prompt("Nome do aluno: ")
    red = prompt("Nota de Redação: ")
    mat = prompt("Nota de Matemática: ")
    port = prompt("Nota de Português: ")
    nat = prompt("Nota de Ciências Naturais: ")
    hum = prompt("Nota de Ciência Humanas: ")
    med = (red*2 + mat*4 + port*2 + nat + hum)/10
    let lista = {
        nome: nome,
        redacao: red,
        matematica: mat,
        portugues: port,
        natureza: nat,
        humanas: hum,
        media: med
    }
    return lista
}


let listaAluno = []

let comando = null

while (comando != "fechar"){
     comando = prompt(`Digite se quer "ver" ou "adicionar" uma nota ou "fechar" o programa: `)
     comando = comando.toLowerCase()
    
    if (comando == "ver"){
        if (listaAluno.length == 0){
            alert("Lista Vazia")
        } else if (listaAluno.length != 0){
            for (let c = 0; c < listaAluno.length; c++){
                alert("Nomes: "+listaAluno[c].nome + "\n " + "Redação: "+listaAluno[c].redacao + "\n" + "Matemática: "+listaAluno[c].matematica + "\n" + "Português: "+listaAluno[c].portugues + "\n" + "Natureza: "+listaAluno[c].natureza + "\n" + "Média: "+listaAluno[c].humanas + "\n" + listaAluno[c].media)
            }
        }
    } else if (comando == "adicionar"){
        listaAluno.push(adicionar()) 
        
    } else {
        console.error("Erro");
    }
}

