import { Skeleton, Stack } from "@mui/material";
import React from "react";

const LoadingPokemonInfo = () => {
  return (
    <Stack px={"44px"} pt={"44px"} pb={"16px"} height={480} bgcolor={"black"}>
      <Skeleton
        sx={{ bgcolor: "grey.900", fontSize: "60px" }}
        variant="text"
        width={"60%"}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={"100%"}
        height={250}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="text"
        width={100}
        height={30}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="text"
        width={100}
        height={30}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="text"
        width={100}
        height={30}
      />
    </Stack>
  );
};

export default LoadingPokemonInfo;
