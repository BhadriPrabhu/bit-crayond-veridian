import { Box, useMediaQuery } from "@mui/material";
import Slide from "./slide";
import SlideMd from "./slidemd";

function Slider() {
    
    
    const isMobile = useMediaQuery("(min-width:1200px)");


  return (
    <Box id="team">
        {isMobile ?
    (

        <Slide id="team" />
       ) : (
      
        <SlideMd id="teammd"/>
       )
    }
        
    </Box>
  )
}

export default Slider;
