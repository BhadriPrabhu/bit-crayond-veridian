import { Box, Tab, Tabs, useTheme } from "@mui/material";
import Logo from "../../assets/logo/logo";
import { useState } from "react";
import { Link } from "react-scroll";

function Nav() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: 0,
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.background.default,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Logo />
        </Box>
        <Box sx={{ marginRight: "280px", marginTop: "-10px" }}>
          <Tabs
            aria-label="Navbar"
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: theme.palette.primary.main,
                height: "4px",
              },
            }}
          >
            <Tab
              component={Link}
              to="home"
              spy={true}
              smooth={true}
              offset={-160}
              // duration={500}
              sx={{
                color: theme.palette.text.textsecondary,
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "22px",
                fontFamily: theme.typography.text.font2,
                textTransform: "capitalize",
              }}
              label="Home"
            />
            <Tab
              component={Link}
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              // duration={500}
              sx={{
                color: theme.palette.text.textsecondary,
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "22px",
                fontFamily: theme.typography.text.font2,
                textTransform: "capitalize",
              }}
              label="About Us"
            />
            <Tab
              component={Link}
              to="team"
              spy={true}
              smooth={true}
              offset={-150}
              // duration={500}
              sx={{
                color: theme.palette.text.textsecondary,
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "22px",
                fontFamily: theme.typography.text.font2,
                textTransform: "capitalize",
              }}
              label="Our Team"
            />
            <Tab
              component={Link}
              to="investment"
              spy={true}
              smooth={true}
              offset={-150}
              // duration={500}
              sx={{
                color: theme.palette.text.textsecondary,
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "22px",
                fontFamily: theme.typography.text.font2,
                textTransform: "capitalize",
              }}
              label="Investment Approach"
            />
            <Tab
              component={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              // duration={500}
              sx={{
                color: theme.palette.text.textsecondary,
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "22px",
                fontFamily: theme.typography.text.font2,
                textTransform: "capitalize",
              }}
              label="Contact Us"
            />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
