import { Box, Typography, useTheme } from "@mui/material";

function CopyRight() {

    const theme = useTheme();

  return (

    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", paddingY: "25px" }}>
        <Typography sx={{color: theme.palette.text.texttertiary, fontWeight: "400", fontSize: "12px", lineHeight: "18px"}}>COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</Typography>
        <Typography sx={{color: theme.palette.text.texttertiary, fontWeight: "400", fontSize: "12px", lineHeight: "18px", textAlign: "right"}}>Term of use</Typography>
    </Box>
  )
}

export default CopyRight;
