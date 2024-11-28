import { Box, Button, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import IconVector from "../../assets/icons/iconVector";
import HomeLeft from '../../assets/images/homeLeft';
import HomeRight from '../../assets/images/homeRight';
import { Link } from "react-scroll";



function Home() {
  const theme = useTheme();

  return (
    <Box id="home" sx={{ bgcolor: theme.palette.primary.main, height: "540px", display: "flex", marginTop: "50px" }}>
      <Box >
        <HomeLeft/>

      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "-250px" }}>
        <Box sx={{}} >
          <Typography sx={{ bgcolor: theme.palette.secondary.a100, color: theme.palette.default.white, fontFamily: theme.typography.text.font1, fontWeight: "500", fontSize: "12px", lineHeight: "15.62px", letterSpacing: "1px", textAlign: "center", height: "16px", paddingY: "5px", paddingX: "10px" }}>INVESTMENT MANAGEMENT</Typography>
        </Box>
        <Typography sx={{ fontWeight: "700", fontSize: "48px", lineHeight: "60px", textAlign: "center", color: theme.palette.default.white, fontFamily: theme.typography.text.font2, zIndex: "5", textWrap: "nowrap" }}>Empowering Investments with Expertise <br />
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
      <Box sx={{marginLeft: "-285px"}} >
        <HomeRight/>

      </Box>

    </Box>
  );
}

export default Home;
