import React from "react";
// import Box from "@mui/material/Box";
import Box from "@mui/material/Box";
import Post from "./Post";
import img from "../images/pexels-edu-carvalho-2050994.jpg";
import img1 from "../images/pexels-lecreusois-240561.jpg";
import img3 from "../images/pexels-trinity-kubassek-445109.jpg";
const Feed = () => {
  return (
    <>
      <Box flex={4} p={2}>
        <Post name="Joshi" image={img} />
        <Post name="Rashi" image={img1} />
        <Post name="Kakshi" image={img3} />
        <Post name="Pakshi" />
        <Post name="Shashi" />
        <Post name="Bushi" />
      </Box>
    </>
  );
};

export default Feed;
