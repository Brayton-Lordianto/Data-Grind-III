import React from "react";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const Post = (props) => {
  const { excerpt, image } = props;
  console.log(excerpt, image);
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton arial-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="user"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="10%"
        width="10%"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {excerpt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton arial-label="add to favourites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton arial-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Post;
