import "./App.css";
// import Basics from "./components/Basics"; //First file, contains basics
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Add from "./components/Add";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
// import Container from "@mui/material/Container";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Basics /> */}
      {/* <Box sx={{ backgroundColor: "Red" }}> */}
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
