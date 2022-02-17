var num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)

/*num[5] = 10 cria um novo elemento com o valor 10

num.push(7) cria um novo elemento sem precisar saber qual é o indice

num.length indica quantas posições tema array

num.sort() organiza os elementos em ordem crescente*/

console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
console.log(`o vetor em ordem crescente é ${num.sort()}`)
console.log(`agora o primeiro valor do vetor é o menor ${num[0]}`)
/*
for(var pos=0; pos<num.length; pos++){
    console.log(num[pos])
}
*/
for(let pos in num){
    console.log(num[pos])
}

var pos = num.indexOf(5)//procura o valor dentro da array

console.log(`O valor 5 ta na ${pos+1} posição`)

