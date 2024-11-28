import { Box, Typography, useTheme } from "@mui/material";
import AboutText from '../../Store/store'

function Investment() {

    const theme = useTheme();

    const details = AboutText((state) => state.invest)

    return (

        <Box id="investment" sx={{bgcolor: theme.palette.primary.lite, display: "flex", flexDirection: "column",marginTop: "-50px" }}>

            <Box>
                <Typography sx={{fontFamily: theme.typography.text.font2, fontWeight: "700", fontSize: "32px", lineHeight: "38px", textAlign: "center", }}>Holistic Investment Approach</Typography>
            </Box>
            <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "30px", marginX: "40px", marginBottom: "70px", marginTop: "15px",}}>
                    {details.map((item) => (
                        <Box key={item.id} sx={{bgcolor: theme.palette.default.white, marginTop: "20px", padding: "35px"}}>
                            <Box key={item.id}>{item.photo}</Box>
                            <Typography key={item.id} sx={{fontFamily: theme.typography.text.font2, fontWeight: "500", fontSize: "18px", lineHeight: "22px", color: theme.palette.secondary.a30, marginTop: "15px"}}>{item.name}</Typography>
                            <Typography key={item.id} sx={{color: theme.palette.text.texttertiary, fontWeight: "400", fontSize: "14px", lineHeight: "20px", marginTop: "20px"}}>{item.text1}</Typography>
                            <Typography key={item.id} sx={{color: theme.palette.text.texttertiary, fontWeight: "400", fontSize: "14px", lineHeight: "20px", marginTop: "10px"}}>{item.text2}</Typography>
                        </Box>
                    ))}
            </Box>

        </Box>
    )
}

export default Investment;
