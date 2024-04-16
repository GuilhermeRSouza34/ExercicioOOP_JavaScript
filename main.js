// CLASES ABSTRATAS
class Animal {
    constructor(nome, idade) {
        if (this.constructor === Animal) {
            throw new Error("Não foi possível instanciar classe abstrata")
        }
        this.nome = nome;
        this.idade = idade;
    }
}