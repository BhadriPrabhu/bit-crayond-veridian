import { Box, Tab, Tabs, useTheme, Drawer } from "@mui/material";
import Logo from "../../assets/logo/logo";
import { useState } from "react";
import { Link } from "react-scroll";
import TopIcon from "../../assets/icons/topIcon";

function Nav() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [draw, setDraw] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const open = () => {
    setDraw(true);
  }

  const closed = () => {
    setDraw(false);
  }

  // const isMobile = useMediaQuery("(min-width:1200px)");

  // const isNavMd = isMobile ? "teammd" : "team";

  return (
    <Box
      sx={{
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          zIndex: "4",
          bgcolor: theme.palette.background.default,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Logo />
        </Box>
        <Box sx={{ marginRight: { lg: "150px", md: "50px", sm: "0px", xs: "0px" }, marginTop: "-10px", display: { xs: "none", sm: "none", md: "block", }, }}>
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
                textWrap: "wrap",
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





        <Box onClick={open} sx={{ display: { xs: "block", sm: "block", md: "none", }, paddingRight: "20px" }}>
          <TopIcon />
        </Box>



        
      </Box>
      <Box>
          <Drawer anchor="top" open={draw} onClose={closed} transitionDuration={{ enter: 0, exit: 0 }} sx={{
            
          '.MuiDrawer-paper': {
            top: '100px',
            position: "sticky",
            // marginRight: "-100px",
            boxShadow: "none",
            // backgroundColor: "rgba(255, 255, 255, 1)",
            // transition: "none",
            
           
          },'.MuiBackdrop-root': {
            backgroundColor: 'transparent',
            
          },
        }}>
            {/* <Box sx={{ paddingLeft: "10px" }}>
              <Logo />
            </Box> */}
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", fontFamily: theme.typography.text.font2, color: theme.palette.text.textsecondary, paddingLeft: "20px", marginTop: "20px", marginBottom: "15px" }}>

              <Link to="home" style={{ fontSize: "20px", fontWeight: "600", lineHeight: "28px", }}
                spy={true}
                smooth={true}
                onClick={closed}
                offset={-160}>Home</Link>
              <Link to="about" style={{ fontSize: "20px", fontWeight: "600", lineHeight: "28px", }}
                spy={true}
                smooth={true}
                onClick={closed}
                offset={-160}>About Us</Link>
              <Link to="team" style={{ fontSize: "20px", fontWeight: "600", lineHeight: "28px", }}
                spy={true}
                smooth={true}
                onClick={closed}
                offset={-160}>Our Team</Link>
              <Link to="investment" style={{ fontSize: "20px", fontWeight: "600", lineHeight: "28px", }}
                spy={true}
                smooth={true}
                onClick={closed}
                offset={-160}>Investment Approach</Link>
              <Link to="contact" style={{ fontSize: "20px", fontWeight: "600", lineHeight: "28px", }}
                spy={true}
                smooth={true}
                onClick={closed}
                offset={-160}>Contact Us</Link>
            </Box>
          </Drawer>
        </Box>
    </Box>
  );
}

export default Nav;
