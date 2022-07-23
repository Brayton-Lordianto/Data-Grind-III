import { Button, styled, Typography } from "@mui/material";
import React from "react";
import { Add, Settings } from "@mui/icons-material";

function Basics() {
  // !. styling
  // const BlueButton = styled(Button)({
  //   backgroundColor: "grey",
  //   color: "white",
  //   margin: 5,
  //   "&:hover": {
  //     backgroundColor: "lightblue",
  //   },
  //   "&:disabled": {
  //     backgroundColor: "gray",
  //     color: "white",
  //   },
  // });

  const BlueButton = styled(Button)({
    backgroundColor: "grey",
    color: "white",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Add new text
      </Button>
      <Button variant="outlined">Outlined</Button>

      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      {/* <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "Black",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        My Unique Button
      </Button> */}
      <BlueButton>My Button</BlueButton>
    </div>
  );
}

export default Basics;
