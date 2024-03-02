import { getPokemons } from "@/actions/serverActions";
import { Chip, Grid, Skeleton, Stack } from "@mui/material";
import axios from "axios";
import Link from "next/link";

const PokemonChips = async () => {
  const baseUrl = "https://pokeapi.co/api/v2";
  const limit = 10;
  const data = await axios.get(`${baseUrl}/pokemon?limit=${limit}`);

  const pokemonListData = data.data.results.map((pokemonObj) => {
    return { name: pokemonObj.name };
  });
  return (
    <Grid columnSpacing={1} rowSpacing={1} container>
      {pokemonListData.map((item) => {
        return (
          <Grid key={item.name} item>
            <Link
              href={`?${new URLSearchParams({
                pokemon: item.name,
              })}`}
            >
              <Chip
                clickable
                color="primary"
                sx={{ color: "white" }}
                label={item.name}
              />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PokemonChips;
