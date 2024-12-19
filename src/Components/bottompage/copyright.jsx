import { Box, Typography, useTheme } from "@mui/material";

function CopyRight() {

    const theme = useTheme();

  return (

    <Box sx={{display: "flex", justifyContent: {lg: "space-between", md: "space-between",}, alignItems: {lg: "center", md: "center", sm: "flex-start", xs: "flex-start"}, paddingY: "25px", flexDirection: {sm: "column", xs: "column", md: "row", lg: "row"} }}>
        <Typography sx={{color: theme.palette.text.texttertiary, fontWeight: "400", fontSize: "12px", lineHeight: "18px", padding: "5px"}}>COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</Typography>
        <Typography sx={{color: theme.palette.text.texttertiary, fontWeight: "400", fontSize: "12px", lineHeight: "18px", textAlign: "right", padding: "5px"}}>Term of use</Typography>
    </Box>
  )
}

export default CopyRight;
