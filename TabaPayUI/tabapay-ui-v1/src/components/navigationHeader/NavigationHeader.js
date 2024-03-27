import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoImage from "./tabapay-logo.svg";

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0e2fe8" }}> {/* Change color here */}
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={LogoImage} alt="Logo" style={{ height: '40px' }} /> {/* Logo image */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="/link1" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>About</a>
            <a href="/link2" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>Contact Us</a>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
