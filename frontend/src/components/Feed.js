import React from "react";
// import Box from "@mui/material/Box";
import Box from "@mui/material/Box";
import Post from "./Post";
// import img from "../images/pexels-edu-carvalho-2050994.jpg";
// import img1 from "../images/pexels-lecreusois-240561.jpg";
// import img3 from "../images/pexels-trinity-kubassek-445109.jpg";
const Feed = (props) => {
  console.log(props);
  // const details = [
  //   {
  //     name: "Ajith",
  //     image: require("../images/pexels-trinity-kubassek-445109.jpg"),
  //   },
  //   {
  //     name: "Ajith",
  //     image: require("../images/pexels-trinity-kubassek-445109.jpg"),
  //   },
  // ];

  const pose = props.posts.map((post) => {
    return <Post excerpt={post.title} image={post.image} />;
  });
  return (
    <>
      <Box flex={4} p={2}>
        {pose}
      </Box>

      {/* <Post name="Joshi" image={img} />
        <Post name="Rashi" image={img1} />
        <Post name="Kakshi" image={img3} />
        <Post name="Pakshi" />
        <Post name="Shashi" />
        <Post name="Bushi" /> */}
    </>
  );
};

export default Feed;
