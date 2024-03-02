import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import ClickIcon from "@/icons/Icon.svg";

const PokemonClick = () => {
  return (
    <Stack
      direction={"row"}
      columnGap={"10px"}
      alignItems={"center"}
      width={"190px"}
    >
      <Image src={ClickIcon} alt="click-icon" />
      <Typography lineHeight={1} variant="body1">
        Нажмите на нужного Покемона
      </Typography>
    </Stack>
  );
};

export default PokemonClick;
