import { Box, Typography, useTheme } from "@mui/material";
import AboutText from '../../Store/store'

function Investment() {

    const theme = useTheme();

    const details = AboutText((state) => state.invest)

    return (

        <Box sx={{bgcolor: theme.palette.primary.lite, display: "flex", flexDirection: "column",marginTop: {lg: "-50px", sm: "0px", xs: "0px", xl: "-50px", md: "0px"},  }}>

            <Box>
                <Typography sx={{fontFamily: theme.typography.text.font2, fontWeight: "700", fontSize: "32px", lineHeight: "38px", textAlign: "center", }}>Holistic Investment Approach</Typography>
            </Box>
            <Box  sx={{display: "grid", gridTemplateColumns: {lg: "1fr 1fr 1fr", xs: "1fr"}, columnGap: "30px", marginX: "40px", marginBottom: "70px", marginTop: "15px",
        "@media (min-width: 1490px) and (max-width: 1500px)": {
            marginX: "25px",
            columnGap: "25px",
        },"@media (min-width: 1440px) and (max-width: 1490px)": {
            columnGap: "30px",
            marginX: "30px",
        }, "@media (min-width: 1400px) and (max-width: 1440px)": {
            columnGap: "25px",
            marginX: "25px",
        }, "@media (min-width: 1360px) and (max-width: 1400px)": {
            columnGap: "20px",
            marginX: "20px",
        }, "@media (min-width: 1320px) and (max-width: 1360px)": {
            columnGap: "15px",
            marginX: "15px",
        }, "@media (min-width: 1280px) and (max-width: 1320px)": {
            columnGap: "13px",
            marginX: "15px",
        }, "@media (min-width: 1240px) and (max-width: 1280px)": {
            columnGap: "10px",
            marginX: "10px",
        }, "@media (min-width: 1200px) and (max-width: 1240px)": {
            columnGap: "10px",
            marginX: "10px",
        }}}>
                    {details.map((item) => (
                        <Box key={item.id} sx={{bgcolor: theme.palette.default.white, marginTop: "20px", padding: "35px", "@media (min-width: 1440px) and (max-width: 1490px)": {
                            padding: "20px"
                        }, "@media (min-width: 1400px) and (max-width: 1440px)": {
                            padding: "15px",
                        }, "@media (min-width: 1360px) and (max-width: 1400px)": {
                            padding: "15px",
                        }, "@media (min-width: 1320px) and (max-width: 1360px)": {
                            padding: "15px",
                        }, "@media (min-width: 1280px) and (max-width: 1320px)": {
                            padding: "15px",
                        }, "@media (min-width: 1240px) and (max-width: 1280px)": {
                            padding: "10px",
                        }, "@media (min-width: 1200px) and (max-width: 1240px)": {
                            padding: "10px",
                        }, "@media (min-width: 1200px) and (max-width: 1220px)": {
                            padding: "5px"
                        } }}>
                            <Box key={item.id} sx={{display: "flex", justifyContent: "center"}}>{item.photo}</Box>
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
