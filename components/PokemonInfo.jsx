"use client";

import { Stack, Typography } from "@mui/material";
import PokemonClick from "./ui/PokemonClick";
import { getPokemonInfo } from "@/actions/serverActions";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const PokemonInfo = async () => {
  const searchParams = useSearchParams();
  const pokemon = searchParams.get("pokemon");

  const baseUrl = "https://pokeapi.co/api/v2";

  if (!pokemon) {
    return (
      <Stack height={480} alignItems={"center"} justifyContent={"center"}>
        <PokemonClick />
      </Stack>
    );
  }

  // const pokemonData = await getPokemonInfo(pokemon);

  const data = await axios.get(`${baseUrl}/pokemon/${pokemon}`);

  const pokemonData = {
    name: data.data.name,
    height: data.data.height,
    id: data.data.id,
    img: data.data.sprites.front_shiny,
    attack: data.data.stats[1].base_stat,
  };
  return (
    <Stack
      px={"44px"}
      pt={"44px"}
      pb={"16px"}
      color={"#A0A0A0"}
      height={480}
      bgcolor={"black"}
      textTransform={"capitalize"}
    >
      <Typography variant="h3">{pokemonData.name}</Typography>
      <Image
        style={{ margin: "0 auto" }}
        height={280}
        width={280}
        src={pokemonData.img}
        alt="pokemonImg"
      />
      <Typography variant="body1">Id: {pokemonData.id}</Typography>
      <Typography variant="body1">height: {pokemonData.height}</Typography>
      <Typography variant="body1">attack: {pokemonData.attack}</Typography>
    </Stack>
  );
};

export default PokemonInfo;
