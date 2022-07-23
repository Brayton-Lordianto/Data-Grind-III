import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  // backgroundColor: "black",
});

//Using a cutsomized div tag
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

//customized Box
const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  // if the size of  the screen is less than sm then display none
  display: "none",
  gap: "20px",
  alignItems: "center",
  // if it is small or bigger than small, then this one
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  diplay: "flex",
  gap: "10px",
  alignItems: "center",
  // justifyContent: "center",
  marginTop: "5px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            JOSHI
          </Typography>
          {/* Logo will come here 
           <Pets sx={{display:{xs:"block",sm:"none"}}}/> */}
          <Search>
            <InputBase placeholder="Search..." sx={{ color: "gray" }} />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ width: 30, height: 30 }}
            />
          </Icons>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography>User</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
