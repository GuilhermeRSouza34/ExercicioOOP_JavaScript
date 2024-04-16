// CLASES ABSTRATAS
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    exibirInformacoes() {
        console.log(`Marca: ${this.marca} Modelo: ${this.modelo}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor) {
        super(marca, modelo);
        this.ano = ano;
        this.cor = cor;
    }
    