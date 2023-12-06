import React, { useState } from "react";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledBadge = styled(Badge)(({theme}) => ({
  display: "none",
  [theme.breakpoints.up("sm")]:{display: "flex"}
}));

const Search = styled("div")({
  borderRadius: "10px",
  width: "40%",
});

const IconsList = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px"
})

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI
        </Typography>
        <BubbleChartIcon
          sx={{ display: { xs: "block", sm: "none" }, fontSize: 40 }}
        ></BubbleChartIcon>
        <Search>
          <InputBase
            placeholder="search..."
            sx={{ paddingLeft: "10px", borderRadius: "10px", width: "100%", backgroundColor: "white", color:"black"  }}
          ></InputBase>
        </Search>
        <IconsList>
          <StyledBadge badgeContent={4} color="error">
            <Mail />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="error">
            <Notifications />
          </StyledBadge>
          <Box
            sx={{ display: "flex", gap: "10px" }}
            onClick={(e) => setToggleMenu(true)}
          >
            <Avatar
              src="https://images.pexels.com/photos/19291404/pexels-photo-19291404/free-photo-of-moca-museum-bangkok.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <Typography
              variant="h6"
              // sx={{ display: { xs: "none", sm: "block" } }}
            >
              John
            </Typography>
          </Box>
        </IconsList>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={toggleMenu}
        onClose={(e) => setToggleMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
