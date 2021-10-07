import fetch from "node-fetch";

const getPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`

  const res = await fetch(url)
  const { results } = await res.json()
   
  for (const i of results){
    console.log(i.name)
  }
  
}

getPokemon();