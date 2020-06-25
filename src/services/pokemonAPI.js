export default { 
    getPokemonByName(name) { 
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json());  
    }
}