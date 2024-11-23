import { Box } from "@mui/material";
import Nav from "../Components/nav";
import Home from "../Components/home/home";

function Screen1() {
  return (
    <Box sx={{paddingX: "55px"}}>
      <Nav/>
      <Home/>
    </Box>
  );
}

export default Screen1;
