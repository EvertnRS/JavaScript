class Carro{
    qualidade_portas;
    cor;
    radio;
    constructor(qualidade_portas, cor, radio){
        this.qualidade_portas = qualidade_portas
        this.cor = cor
        this.radio = radio
    }
    pintar_carro(nova_cor){
        this.cor = nova_cor 
    }
    adicionar_motor(potencia, quantidade_cilindros, tipo_combustivel){
        let motor = new Motor(potencia, quantidade_cilindros, tipo_combustivel)
    }
}

class Motor{
    potencia;
    quantidade_cilindros;
    tipo_combustivel;
    constructor(potencia, quantidade_cilindros, tipo_combustivel){
        this.potencia = potencia
        this.quantidade_cilindros = quantidade_cilindros
        this.tipo_combustivel = tipo_combustivel
    }
}

let carro = new Carro("boa", "azul", "sim")

carro.pintar_carro("vermelho")
carro.adicionar_motor(90, 6, "etanol")




