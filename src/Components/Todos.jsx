import {
  Box,
  Stack,
  Typography,
  Paper,
  Checkbox,
  Divider,
} from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { motion } from "framer-motion";
import { useLocalStorage } from "@uidotdev/usehooks";

function Todos({ darkmode, data, setData }) {
  const [filter, setFilter] = useLocalStorage("All");

  const filteredTodos = () => {
    if (filter === "Active") {
      return data.filter(
        (todo) => !todo.completed && todo.inputValue.length > 0
      );
    } else if (filter === "Completed") {
      return data.filter((todo) => todo.completed);
    } else {
      return data;
    }
  };

  const handleCheck = (index) => {
    const updatedData = [...data];
    updatedData[index].completed = !updatedData[index].completed;
    setData(updatedData);
  };

  const clearCompleted = () => {
    const updatedData = data.filter((todo) => !todo.completed);
    setData(updatedData);
  };

  return (
    <Paper
      elevation={10}
      style={{
        backgroundColor: darkmode ? "hsl(232, 24%, 20%)" : "white",
        color: darkmode ? "white" : "black",
        padding: "10px",
      }}
    >
      {filteredTodos().length === 0 ? (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h5">No Todos to display...</Typography>
        </Box>
      ) : (
        <>
          {filteredTodos().map(
            (todo, index) =>
              todo.inputValue.length > 0 && (
                <Stack
                  component={motion.div}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                >
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <Checkbox
                      onClick={() => handleCheck(index)}
                      icon={<CircleOutlinedIcon />}
                      checkedIcon={
                        <CircleIcon
                          sx={{
                            backgroundColor:
                              "radial-gradient(circle, rgba(88,200,250,1) 3%, rgba(167,117,238,1) 100%)",
                          }}
                        />
                      }
                      checked={!!todo.completed}
                    />

                    <Typography>{todo.inputValue}</Typography>
                  </Stack>
                  <Divider />
                </Stack>
              )
          )}
        </>
      )}

      <Stack
        direction="row"
        spacing={{ xs: 0.8, lg: 2.2 }}
        sx={{
          marginTop: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">
          {filteredTodos().length} items left
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ cursor: "pointer" }}
            variant="body2"
            onClick={() => setFilter("All")}
          >
            All
          </Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            variant="body2"
            onClick={() => setFilter("Active")}
          >
            Active
          </Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            variant="body2"
            onClick={() => setFilter("Completed")}
          >
            Completed
          </Typography>
        </Stack>
        <Typography
          sx={{ cursor: "pointer" }}
          variant="body2"
          onClick={clearCompleted}
        >
          Clear Completed
        </Typography>
      </Stack>
    </Paper>
  );
}

export default Todos;
