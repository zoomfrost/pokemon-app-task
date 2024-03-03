import Header from "@/components/Header";
import PokemonChips from "@/components/PokemonChips";
import PokemonInfo from "@/components/PokemonInfo";
import LoadingPokemonInfo from "@/components/ui/LoadingPokemonInfo";
import LoadingPokemonsChips from "@/components/ui/LoadingPokemonsChips";

import { Box, Container, Stack } from "@mui/material";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Box
      component={"main"}
      py={"50px"}
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#131313",
        color: "white",
      }}
    >
      <Container maxWidth={"lg"}>
        <Header />
        <Stack
          direction={"row"}
          mt={"54px"}
          height={"400px"}
          alignItems={"center"}
        >
          <Box width={"50%"}>
            <Suspense fallback={<LoadingPokemonsChips />}>
              <PokemonChips />
            </Suspense>
          </Box>
          <Box width={"50%"}>
            <Suspense fallback={<LoadingPokemonInfo />}>
              <PokemonInfo />
            </Suspense>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
