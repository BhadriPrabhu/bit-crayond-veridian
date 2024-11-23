import { Box, Link, useTheme } from "@mui/material";
import Logo from "../../assets/logo";


function Nav() {
  const theme = useTheme();

  return (
    <Box sx={{ margin: "0px", padding: "0px", top: "-20px", position: "relative" }}>
      <Box
        sx={{
          position: "sticky",
          top: "0px",
          width: "100%",
          bgcolor: theme.palette.background.default, // Adjust theme usage
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Logo />
        </Box>
        <Box>
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#team">Our Team</Link>
          <Link href="#investment">Investment Approach</Link>
          <Link href="#contact">Contact Us</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
