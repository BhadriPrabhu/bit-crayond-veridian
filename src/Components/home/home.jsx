import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import IconVector from "../../assets/icons/iconVector";
import HomeLeft from '../../assets/images/homeLeft';
import HomeRight from '../../assets/images/homeRight';
import { Link } from "react-scroll";
import HomeMdLeft from '../../assets/images/homeMdLeft';
import HomeMdRight from '../../assets/images/homeMdRight';



function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(min-width: 450px");


  return (
    <Box id="home" sx={{ bgcolor: theme.palette.primary.main, height: "540px", display: "flex", marginTop: "50px", }}>
      <Box sx={{
        "@media (min-width: 425px) and (max-width: 450px)": {
          marginTop: "-120px"
        },
        "@media (min-width: 400px) and (max-width: 425px)": {
          marginTop: "-120px"
        }, "@media (min-width: 350px) and (max-width: 400px)": {
          marginTop: "-120px"
        }, "@media (min-width: 300px) and (max-width: 350px)": {
          marginTop: "-120px",
        }
      }} >
        {isMobile ?
          <HomeLeft /> : <HomeMdLeft />
        }

      </Box>
      <Box sx={{
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: { lg: "-250px", md: "-250px", sm: "-250px", xs: "-430px" }, marginRight: { lg: "0px", md: "0px", sm: "0px", xs: "60px" }, paddingX: "20px", "@media (min-width: 500px) and (max-width: 550px)": {
          marginLeft: "-440px",
          marginRight: "85px",
        }, "@media (min-width: 450px) and (max-width: 500px)": {
          marginLeft: "-405px",
          marginRight: "90px",
        },
        "@media (min-width: 425px) and (max-width: 450px)": {
          marginLeft: "-300px",
          marginRight: "10px",
        }, "@media (min-width: 400px) and (max-width: 425px)": {
          marginLeft: "-290px",
          marginRight: "20px"
        }, "@media (min-width: 350px) and (max-width: 400px)": {
          marginLeft: "-290px",
          marginRight: "30px"
        }, "@media (min-width: 325px) and (max-width: 350px)": {
          marginLeft: "-290px",
          marginRight: "10px",
        }, "@media (min-width: 300px) and (max-width: 325px)": {
          marginLeft: "-280px"
        }
      }}>
        <Box sx={{}} >
          <Typography sx={{ bgcolor: theme.palette.secondary.a100, color: theme.palette.default.white, fontFamily: theme.typography.text.font1, fontWeight: "500", fontSize: "12px", lineHeight: "15.62px", letterSpacing: "1px", textAlign: "center", height: "16px", paddingY: "5px", paddingX: "10px" }}>INVESTMENT MANAGEMENT</Typography>
        </Box>
        <Typography sx={{ fontWeight: "700", fontSize: {lg: "48px", md: "48px", sm: "40px", xs: "32px"}, lineHeight: "60px", textAlign: "center", color: theme.palette.default.white, fontFamily: theme.typography.text.font2, zIndex: "5", textWrap: "wrap" }}>Empowering Investments with Expertise <br />
          and Strategy</Typography>
        <Button sx={{ bgcolor: theme.palette.primary.dark, height: "52px", marginTop: "40px", borderRadius: "2px" }}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-160}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: "30px", gap: "15px" }}>
              <Typography sx={{ color: theme.palette.default.white, height: "20px", textTransform: "initial", fontWeight: "500", fontSize: "18px", lineHeight: "20px", }}>Know more</Typography>
              <IconVector />
            </Box>
          </Link>
        </Button>
      </Box>
      <Box sx={{
        marginLeft: {
          lg: "-231px", md: "-300px", sm: "-340px", xs: "-450px", "@media (min-width: 550px) and (max-width: 600px)": {
            marginLeft: "-500px",
          }, "@media (min-width: 500px) and (max-width: 550px)": {
            marginLeft: "-525px",
          }, "@media (min-width: 450px) and (max-width: 500px)": {
            marginLeft: "-500px",
          },
          "@media (min-width: 425px) and (max-width: 450px)": {
            marginTop: "-120px",
            marginLeft: "-310px"
          }, "@media (min-width: 400px) and (max-width: 425px)": {
            marginTop: "-120px",
            marginLeft: "-300px"
          }, "@media (min-width: 350px) and (max-width: 400px)": {
            marginTop: "-120px",
            marginLeft: "-320px"
          },
          "@media (min-width: 325px) and (max-width: 350px)": {
            marginTop: "-120px",
            marginLeft: "-300px"
          }, "@media (min-width: 300px) and (max-width: 325px)": {
            marginTop: "-120px",
            marginLeft: "-330px",

          }
        }
      }} >
        {isMobile ?
          <HomeRight /> : <HomeMdRight />
        }

      </Box>

    </Box>
  );
}

export default Home;
