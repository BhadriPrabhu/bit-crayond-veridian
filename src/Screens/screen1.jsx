import { Box, Divider } from "@mui/material";
import Nav from "../Components/nav";
import Home from "../Components/home/home";
import { useTheme } from '@mui/material/styles';
import About from "../Components/about/about";
// import SlidePage from "../Components/team/slidepage";
// import Investment from "../Components/investment/investment";
import InvestAll from "../Components/investment/investall";
import Contact from "../Components/contact/contact";
import CopyRight from "../Components/bottompage/copyright";

function Screen1() {

  const theme = useTheme();

  return (
    <Box sx={{ paddingX: {lg: "80px", md: "0px", sm: "0px", xs: "0px"}, 
    // "@media (min-width: 425px) and (max-width: 450px)": {
    //   marginRight: "-10px"
    // }, "@media (min-width: 400px) and (max-width: 425px)": {
    //   marginRight: "-28px"
    // }, "@media (min-width: 385px) and (max-width: 400px)": {
    //   marginRight: "-40px"
    // }, "@media (min-width: 360px) and (max-width: 385px)": {
    //   marginRight: "-60px"
    // }, "@media (min-width: 350px) and (max-width: 360px)": {
    //   marginRight: "-80px"
    // }, "@media (min-width: 330px) and (max-width: 350px)": {
    //   marginRight: "-90px"
    // }, "@media (min-width: 320px) and (max-width: 330px)": {
    //   marginRight: "-100px"
    // }, "@media (min-width: 310px) and (max-width: 320px)": {
    //   marginRight: "-120px"
    // }, "@media (min-width: 300px) and (max-width: 310px)": {
    //   marginRight: "-130px"
    // },
     }}>
      <Box sx={{ position: "sticky", top: "-5px", zIndex: "15",}}>
        <Nav />
        <Divider variant="fullWidth" sx={{ borderColor: theme.palette.line.line2, marginX: {lg: "-85px", md: "0px", sm: "0px", xs: "0px" } }} />
      </Box>

      <Home />
      <About />
      <InvestAll />
      <Contact />
      <Divider variant="fullWidth" sx={{ borderColor: theme.palette.line.line2, marginX: {lg: "-85px", md: "0px", sm: "0px", xs: "0px" }, marginTop: "50px", borderWidth: "1.5px" }} />
      <CopyRight />
    </Box>
  );
}

export default Screen1;
