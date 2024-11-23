import { Box, Button, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HomeLeftTop from '../../assets/homeLeftTop';
import HomeLeftBottom from '../../assets/homeLeftBottom';
import HomeRightTop from '../../assets/homeRightTop';
import HomeRightBottom from '../../assets/homeRightBottom';
import IconVector from "../../assets/iconVector";



function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, height: "540px", display: "flex", }}>
      <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "normal" }}>
        <Box><HomeLeftTop /></Box>
        <Box sx={{ marginTop: "180px", marginLeft: "-280px" }}><HomeLeftBottom /></Box>

      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "-200px" }}>
        <Box sx={{}} >
          <Typography sx={{ bgcolor: theme.palette.secondary.a100, color: theme.palette.default.white, fontFamily: theme.typography.text.font1, fontWeight: "500", fontSize: "12px", lineHeight: "15.62px", letterSpacing: "1px", textAlign: "center", height: "16px", paddingY: "5px", paddingX: "10px" }}>INVESTMENT MANAGEMENT</Typography>
        </Box>
        <Typography sx={{ fontWeight: "700", fontSize: "48px", lineHeight: "60px", textAlign: "center", color: theme.palette.default.white, fontFamily: theme.typography.text.font2, zIndex: "5", textWrap: "nowrap" }}>Empowering Investments with Expertise <br />
          and Strategy</Typography>
        <Button sx={{ bgcolor: theme.palette.primary.dark, height: "52px", marginTop: "40px", }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: "30px", gap: "15px" }}>
            <Typography sx={{ color: theme.palette.default.white, height: "20px", textTransform: "initial", fontWeight: "500", fontSize: "18px", lineHeight: "20px", }}>Know more</Typography>
            <IconVector />
          </Box>
        </Button>
      </Box>
      <Box >
        <Box sx={{ marginLeft: "-70px" }} ><HomeRightTop /></Box>
        <Box sx={{ marginTop: "-125px", marginLeft: "-210px" }}><HomeRightBottom /></Box>

      </Box>

    </Box>
  );
}

export default Home;
