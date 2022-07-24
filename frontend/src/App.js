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
import { useEffect, useState } from "react";
import axios from "axios";
// import Container from "@mui/material/Container";

function App() {
  const [mode, setMode] = useState("light");
  const [posts, setPost] = useState([]);
  const LOCAL_STORAGE_KEY = "posts";

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const retrieveContact = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data;
  };

  useEffect(() => {
    // const retrievePosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrievePosts) setPost(retrievePosts);
    const getAllPosts = async () => {
      const allPosts = await retrieveContact();
      if (allPosts) setPost(allPosts);
    };

    getAllPosts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const addPostHandler = (post) => {
    console.log(post);
    setPost([...posts, post]);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Basics /> */}
      {/* <Box sx={{ backgroundColor: "Red" }}> */}
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed posts={posts} />
          <Rightbar />
        </Stack>
        <Add addPostHandler={addPostHandler} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
