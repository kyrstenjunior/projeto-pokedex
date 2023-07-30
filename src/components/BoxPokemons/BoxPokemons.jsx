// Hooks
import { useState, useEffect, useRef } from "react";
// Componentes
import Pokemons from "../Pokemons/Pokemons";
import PokemonSingleSearch from "../PokemonSingleSearch/PokemonSingleSearch";
// Estilos
import * as C from "./styles";
// Axios
import axios from "axios";
// Imagem
import logo from "../../assets/pokemon.svg";

const BoxPokemons = () => {

  const [listPokemons, setListPokemons] = useState([]);
  const [pokemonSingle, setPokemonSingle]  = useState();
  const inputRef = useRef();

  useEffect(() => {
    if(pokemonSingle == null){
      listCompletePokemons();
    } else {
      setListPokemons(pokemonSingle);
    }
  },[pokemonSingle])
  
  const handleChange = (e) => {
    inputRef.current = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    (inputRef.current == undefined || inputRef.current == "" ? (
      alert("Digite o nome completo do pokémon para realizar a busca")
    ) : (searchPokemons(inputRef.current))
    )
  }

  const listCompletePokemons = async () => {
    await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=40")
    .then((response) => {
      const resultado_name_url = response.data.results;
      setListPokemons(resultado_name_url);
    }).catch((err) => {
      console.log(`Erro ao carregar lista geral: ${err}`);
    })
  }

  const searchPokemons = (busca) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${busca}`)
    .then((response) => {
      const resultado = response.data;
      setPokemonSingle({
        nome: resultado.name,
        img: resultado.sprites.other.dream_world.front_default,
        type: resultado.types
      });
    }).catch((err) => {
      console.log(`Erro ao carregar lista geral: ${err}`);
    })
  }

  return (
    <>
      <C.ContainerHeader>
        <C.UpMenu>
          <a href="/"><C.Logo src={logo} /></a>
          <div style={{"display": "flex", "marginRight": 20}}>
            <C.ColoredBalls backgroundColor="#97031C" />
            <C.ColoredBalls backgroundColor="#F8E03D" />
            <C.ColoredBalls backgroundColor="#3D7F47" />
          </div>
        </C.UpMenu>
        <C.Formulario onSubmit={handleSubmit}>
          <C.Search onChange={handleChange} type="text" placeholder="Nome do pokémon..." />
          <C.Submit type="submit" value="Buscar" />
        </C.Formulario>
      </C.ContainerHeader>
      <C.ContainerBox>
        {
          listPokemons.length <= 0 ? (
            <p>Carregando...</p>
          ) : (
            (pokemonSingle == null ? (
              listPokemons.map((data, key) => (
                <Pokemons key={key} data={data} />
              ))
            ) : (
              <PokemonSingleSearch
                name={pokemonSingle.nome}
                img={pokemonSingle.img}
                types={pokemonSingle.type}
              />
            )
          ))
        }
      </C.ContainerBox>
    </>
  )
}

export default BoxPokemons