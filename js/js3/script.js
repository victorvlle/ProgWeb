class ConjuntoDeInteiros {
    constructor(valorMaximo) {
        this.valorMaximo = valorMaximo;
        this.conjunto = new Array(valorMaximo + 1).fill(false);
    }

    inserir(elemento) {
        if (elemento >= 0 && elemento <= this.valorMaximo) {
            this.conjunto[elemento] = true;
        } else {
            console.error(`Elemento fora dos limites: ${elemento}`);
        }
    }

    remover(elemento) {
        if (elemento >= 0 && elemento <= this.valorMaximo) {
            this.conjunto[elemento] = false;
        } else {
            console.error(`Elemento fora dos limites: ${elemento}`);
        }
    }

    uniao(outroConjunto) {
        let conjuntoResultado = new ConjuntoDeInteiros(this.valorMaximo);
        for (let i = 0; i <= this.valorMaximo; i++) {
            conjuntoResultado.conjunto[i] = this.conjunto[i] || outroConjunto.conjunto[i];
        }
        return conjuntoResultado;
    }

    intersecao(outroConjunto) {
        let conjuntoResultado = new ConjuntoDeInteiros(this.valorMaximo);
        for (let i = 0; i <= this.valorMaximo; i++) {
            conjuntoResultado.conjunto[i] = this.conjunto[i] && outroConjunto.conjunto[i];
        }
        return conjuntoResultado;
    }

    diferenca(outroConjunto) {
        let conjuntoResultado = new ConjuntoDeInteiros(this.valorMaximo);
        for (let i = 0; i <= this.valorMaximo; i++) {
            conjuntoResultado.conjunto[i] = this.conjunto[i] && !outroConjunto.conjunto[i];
        }
        return conjuntoResultado;
    }

    paraString() {
        let elementos = [];
        for (let i = 0; i <= this.valorMaximo; i++) {
            if (this.conjunto[i]) {
                elementos.push(i);
            }
        }
        return `{${elementos.join(", ")}}`;
    }
}

// Aplicação para testar a classe
const prompt = require('prompt-sync')(); // Usando prompt-sync para entrada do usuário

const valorMaximo = parseInt(prompt("Digite o valor máximo para os conjuntos: "));

const conjuntoA = new ConjuntoDeInteiros(valorMaximo);
const conjuntoB = new ConjuntoDeInteiros(valorMaximo);

console.log("Defina os elementos do conjunto A (Digite 'fim' para terminar):");
while (true) {
    const input = prompt("Elemento: ");
    if (input.toLowerCase() === 'fim') break;
    const elemento = parseInt(input);
    conjuntoA.inserir(elemento);
}

console.log("Defina os elementos do conjunto B (Digite 'fim' para terminar):");
while (true) {
    const input = prompt("Elemento: ");
    if (input.toLowerCase() === 'fim') break;
    const elemento = parseInt(input);
    conjuntoB.inserir(elemento);
}

console.log("Conjunto A:", conjuntoA.paraString());
console.log("Conjunto B:", conjuntoB.paraString());

const uniaoConjuntos = conjuntoA.uniao(conjuntoB);
console.log("União de A e B:", uniaoConjuntos.paraString());

const intersecaoConjuntos = conjuntoA.intersecao(conjuntoB);
console.log("Interseção de A e B:", intersecaoConjuntos.paraString());

const diferencaConjuntos = conjuntoA.diferenca(conjuntoB);
console.log("Diferença de A e B:", diferencaConjuntos.paraString());
