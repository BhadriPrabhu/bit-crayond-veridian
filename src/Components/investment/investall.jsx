import { Box, useMediaQuery } from "@mui/material";
import InvestMd from "./investmd";
import Investment from "./investment";

function InvestAll() {
    
    
    const isMobile = useMediaQuery("(min-width:600px)");


  return (
    <Box id="investment" >
        {isMobile ?
    (

        <Investment id="invest" />
       ) : (
      
        <InvestMd/>
       )
    }
        
    </Box>
  )
}

export default InvestAll;
