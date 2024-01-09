import { Box, Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import desktopLightBackground from "/src/images/bg-desktop-light.jpg";
import desktopDarkBackground from "/src/images/bg-desktop-dark.jpg";
import mobileDarkBackground from "/src/images/bg-mobile-dark.jpg";
import mobileLightBackground from "/src/images/bg-mobile-dark.jpg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Todo({ darkmode, setDarkMode }) {



    
  const darkModeHandler = () => {
    setDarkMode(true)
  };

  const lightModeHandler = () => {
    setDarkMode(false)
  };


  return (
    <Box
      sx={{
        backgroundImage: {
          xs: darkmode
            ? `url(${mobileDarkBackground})`
            : `url(${mobileLightBackground})`,
          sm: darkmode
            ? `url(${desktopDarkBackground})`
            : `url(${desktopLightBackground})`,
        },
      }}
    >
      <Stack
        spacing={{ lg: 20 }}
        direction="row"
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <Typography>TODOS</Typography>
        <Box>
          {darkmode ? (
            <IconButton onClick={lightModeHandler}>
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton onClick={darkModeHandler}>
              <DarkModeIcon />
            </IconButton>
          )}
        </Box>
      </Stack>
    </Box>
  );
}

export default Todo;
