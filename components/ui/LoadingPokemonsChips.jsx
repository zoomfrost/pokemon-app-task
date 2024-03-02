import { Skeleton, Stack } from "@mui/material";
import React from "react";

const LoadingPokemonsChips = () => {
  return (
    <Stack direction={"row"} width={"100%"} columnGap={"10px"}>
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rounded"
        width={"100%"}
        height={100}
      />
    </Stack>
  );
};

export default LoadingPokemonsChips;
