// https://pokeapi.co/api/v2/pokemon/
const url = 'https://pokeapi.co/api/v2/pokemon/';

const procesarFetch = async (link) => {
    try {
        const respuesta = await fetch(link) 
        const info = await respuesta.json()
        return info
    } catch (error) {
        console.log("Hubo un error")
    }
}

procesarFetch(url)