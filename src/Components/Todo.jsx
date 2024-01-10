import {
  Box,
  Stack,
  Typography,
  IconButton,
  Paper,
  InputBase,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import desktopLightBackground from "/src/images/bg-desktop-light.jpg";
import desktopDarkBackground from "/src/images/bg-desktop-dark.jpg";
import mobileDarkBackground from "/src/images/bg-mobile-dark.jpg";
import mobileLightBackground from "/src/images/bg-mobile-light.jpg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Todos from "./Todos";

function Todo({ darkmode, setDarkMode }) {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(true);
  };

  const lightModeHandler = () => {
    setDarkMode(false);
  };

  const CheckHandler = () => {
    setData([...data, { inputValue }]);
    setInputValue("");
  };

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
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
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { xs: "14em", sm: "10em", lg: "12em" },
        color: darkmode ? "white" : "black",
              position: "relative",
        
      }}
    >
      <Stack
        spacing={{xs:1,sm:0}}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: { xs: 100, sm: 80, lg: 100 },
          left: 0,
          right: 0,
        }}
      >
        <Stack
          spacing={{ xs: 14, sm: 20, lg: 40 }}
          direction="row"
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">
            <b>TODOS</b>
          </Typography>
          <Box>
            {darkmode ? (
              <IconButton onClick={lightModeHandler}>
                <LightModeIcon sx={{ color: darkmode ? "white" : "black" }} />
              </IconButton>
            ) : (
              <IconButton onClick={darkModeHandler}>
                <DarkModeIcon sx={{ color: darkmode ? "white" : "black" }} />
              </IconButton>
            )}
          </Box>
        </Stack>
        <Stack spacing={3}>
                  <Paper
                      elevation={10}
            style={{
              backgroundColor: darkmode ? "hsl(232, 24%, 20%)" : "white",
            }}
            component="form"
            sx={{
              p: "3px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <Checkbox
              onClick={CheckHandler}
              icon={<CircleOutlinedIcon />}
              checked={isChecked}
            />
            <InputBase
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              sx={{ color: darkmode ? "white" : "black" }}
              fullWidth
              placeholder="Create a new todo.."
            />
          </Paper>

          {/* TODO LISTS COMPONENT */}
          <Todos
            darkmode={darkmode}
            setDarkMode={setDarkMode}
            data={data}
            setData={setData}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Todo;
