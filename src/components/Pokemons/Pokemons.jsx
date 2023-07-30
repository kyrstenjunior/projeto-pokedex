// Hooks
import { useEffect, useState } from "react";
// Axios
import axios from "axios";
// Componentes
import ModalWindow from "../ModalPokemon/Modal";
// Estilos
import * as C from "./styles";

const Pokemons = ({data}) => {

  useEffect(() => {
    loadPokemons();
  },[])

  const [pokemons, setPokemons] = useState(null)

  const loadPokemons = async () => {
    await axios.get(data.url)
    .then((response) => {
      const resultados = response.data;
      setPokemons(resultados)
    }).catch((err) => {
      console.log(`Erro ao carregar lista geral: ${err}`);
    })
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  const traducao = (resultado) => {
    if(resultado == "grass"){
      return "planta"
    } else if(resultado == "poison"){
      return "veneno"
    } else if(resultado == "fire"){
      return "fogo"
    } else if(resultado == "water"){
      return "água"
    } else if(resultado == "rock"){
      return "pedra"
    } else if(resultado == "flying"){
      return "voador"
    } else if(resultado == "fighting"){
      return "lutador"
    } else if(resultado == "ground"){
      return "terra"
    } else if(resultado == "bug"){
      return "inseto"
    } else if(resultado == "ghost"){
      return "fantasma"
    } else if(resultado == "steel"){
      return "aço"
    } else if(resultado == "electric"){
      return "elétrico"
    } else if(resultado == "psychic"){
      return "psíquico"
    } else if(resultado == "ice"){
      return "gelo"
    } else if(resultado == "dragon"){
      return "dragão"
    } else if(resultado == "dark"){
      return "sombrio"
    } else if(resultado == "fairy"){
      return "fada"
    } else if(resultado == "unknown"){
      return "desconhecido"
    } else if(resultado == "shadow"){
      return "sombras"
    } else if(resultado == "normal"){
      return "normal"
    }
  }

  return (
    <div>
      {pokemons == null ? (
        <p>Carregando...</p>
      ) : (
        <>
          <C.Card onClick={() => handleOpen()}>
            <C.Imagem src={pokemons.sprites.other.dream_world.front_default} />
            <C.NamePokemon>{pokemons.name}</C.NamePokemon>
          </C.Card>
          <ModalWindow 
            open={open}
            close={() => handleClose()}
            pokemon={pokemons.name}
            img={pokemons.sprites.other.dream_world.front_default}
            type={
              (pokemons.types.length >= 2 ? (
                `${traducao(pokemons.types[0].type.name)}, ${traducao(pokemons.types[1].type.name)}`
              ) : (
                `${traducao(pokemons.types[0].type.name)}`
              ))
            }
            />
        </>
      )}
    </div>
  )
}

export default Pokemons