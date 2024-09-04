const nomes = ["Bruninho", "Sarote", "Lucax", "Lara", "Victor", "Davizin", "Jabezin"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
