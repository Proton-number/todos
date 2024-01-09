import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const [darkmode, setDarkMode] = useState(true);
  return (
    <>
      <Todo darkmode={darkmode} setDarkmode={setDarkMode} />
    </>
  );
}

export default App;
