import { Box, Divider } from "@mui/material";
import Nav from "../Components/nav";
import Home from "../Components/home/home";
import { useTheme } from '@mui/material/styles';
import About from "../Components/about/about";
// import SlidePage from "../Components/team/slidepage";
import Investment from "../Components/investment/investment";
import Contact from "../Components/Contact/contact";
import CopyRight from "../Components/bottompage/copyRight";

function Screen1() {

  const theme = useTheme();

  return (
    <Box sx={{ paddingX: "107px" }}>
      <Box sx={{ position: "sticky", top: "-5px", zIndex: "15",}}>
        <Nav />
        <Divider variant="fullWidth" sx={{ borderColor: theme.palette.line.line2, marginX: "-110px" }} />
      </Box>

      <Home />
      <About />
      <Investment />
      <Contact />
      <Divider variant="fullWidth" sx={{ borderColor: theme.palette.line.line2, marginX: "-110px", marginTop: "50px", borderWidth: "1.5px" }} />
      <CopyRight />
    </Box>
  );
}

export default Screen1;
