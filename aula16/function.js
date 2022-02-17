function parimp(n) {
    if (n%2==0) {
        return "par"
    } else {
        return "impar"
    }
}

console.log(parimp(4))//retorna o resultado da condição dependendo do parâmetro

function soma(n1=0, n2=0) { //caso não for indicado algum dos valores o n vai valer 0
    return n1 + n2
}

console.log(soma(7))

var v = function(x) {
    return x*2
}

console.log(v(5))

function fatorial(n) {
    var fat = 1
    for(var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(7))

//recursividade
function fato(n) {
    if (n == 1){
        return 1  
    } else {
        return n * fato(n-1)
    }
    
}

console.log(fato(7))