import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Fab,
  Modal,
  Tooltip,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = (props) => {
  const [open, setOpen] = useState(false);
  // data set kia hai
  const [data, setData] = useState({
    excerpt: " ",
    image: " ",
  });

  const [submitted, setSubmitted] = useState(false);
  const excerptInput = (event) => {
    // console.log(data);
    setData({
      ...data,
      excerpt: event.target.value,
    });
  };
  const imageInput = (event) => {
    // console.log(data);
    setData({
      ...data,
      image: event.target.value,
    });
  };

  const Submit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    props.addPostHandler(data);
axios.post()
    setData({
      excerpt: " ",
    });
  };
  // console.log(submitted);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "50%", md: "3em", lg: "7em" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={Submit}>
          <Box
            width={400}
            height={275}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={5}
          >
            <Typography variant="h6" color="grey" textAlign="center">
              Create post
            </Typography>
            <UserBox>
              <Avatar src="#" sx={{ width: 30, height: 30 }} />
              <Typography fontWeight={500} variant="span">
                John Doe
              </Typography>
            </UserBox>
            {/* //Input lia hai */}
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's in your mind"
              variant="standard"
              value={data.excerpt}
              onChange={excerptInput}
            />
            {submitted && !data.excerpt ? alert("Please enter text") : null}
            {/* Stack: It is a flexbox in which we can  give any direction */}
            <Stack direction="row" gap={1} mt={1 + 1} mb={3}>
              <EmojiEmotions color="primary" />
              <Image
                color="secondary"
                value={data.image}
                onClick={imageInput}
              />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button type="submit">Post</Button>
              <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </form>
      </StyledModal>
    </>
  );
};
export default Add;
