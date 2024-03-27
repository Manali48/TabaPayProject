import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#0e2fe8",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "fixed",
        bottom: 0,
        left: 0,
        boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5"> 
              Developers UI Project
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="body2"> 
              <Link href="/about" color="inherit" style={{ marginRight: 20 }}>
                About Us
              </Link>
              <Link href="/contact" color="inherit" style={{ marginRight: 20 }}>
                Contact Us
              </Link>
              <Link href="/privacy" color="inherit">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
