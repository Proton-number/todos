import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import { Box } from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";


function App() {
  const [darkmode, setDarkMode] = useLocalStorage ("mode",true);
  return (
    <Box
      sx={{
        backgroundColor: darkmode ? "hsl(232, 24%, 20%)" : "white",
        height: "100vh",
      }}
    >
      <Todo darkmode={darkmode} setDarkMode={setDarkMode} />
    </Box>
  );
}

export default App;
