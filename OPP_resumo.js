/*------EXEMPLO PRÁTICO DE PROGRAMAÇÃO ORIENTADA A OBJETO EM JS------ */

/*Crie um programa de uma pessoa qualquer que fale o seu nome, idade e comida favorita*/

class Pessoa{
    constructor(nome, idade, comida_fav){
        this.nome = nome
        this.idade = idade
        this.comida_fav = comida_fav
    }
    falar(){
        console.log("Meu nome é", this.nome, "tenho", this.idade, "anos e minha comida favorita é", this.comida_fav)
    }
}

faustogildo = new Pessoa("Faustogildo", 37, "pizza")

faustogildo.falar()