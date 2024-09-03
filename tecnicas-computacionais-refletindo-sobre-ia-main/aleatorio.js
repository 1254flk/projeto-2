const nomes = ["Gustavo", "Bruno", "Victor", "Vinicius Lara", "Davi", "Lucas", "Joabe"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
