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
    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Ano: ${this.ano} Cor: ${this.cor}`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }
}

// Criando instâncias de objetos
let carro1 = new Carro("Toyota", "Corolla", "Preto");
let moto1 = new Moto("Honda", "CBR 600RR", "600");
let carro2 = new Carro("Ford", "Fusion", "Prata");

// Exibindo informações dos objetos
console.log("Informações do Carro 1:");
carro1.exibirInformacoes();

console.log("\nInformações da Moto 1:");
moto1.exibirInformacoes();

console.log("\nInformações do Carro 2:");
carro2.exibirInformacoes();
    