import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Stack direction={"row"}>
      <Box
        sx={{
          border: "1px solid white",
          padding: "6px",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} href={"/"}>
          Покемоны APi
        </Link>
      </Box>
    </Stack>
  );
};

export default Header;
