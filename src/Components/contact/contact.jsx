import { Box, Typography, useTheme } from "@mui/material"
import ContactLeft from '../../assets/images/contactLeft'
import ContactRight from '../../assets/images/contactRight'
import Vector from '../../assets/icons/vector'

function Contact() {

    const theme = useTheme();

    return (
        <Box id="contact" sx={{ bgcolor: theme.palette.primary.main, display: "flex", justifyContent: {lg: "space-between", md: "center", sm: "center", xs: "center"} }} >
            <Box sx={{ display: { xs: "none", sm: "none", lg: "block", md: "none" } }}>
                <ContactLeft />
            </Box>
            <Box>
                <Box sx={{ marginTop: "60px" }}>
                    <Typography sx={{ color: theme.palette.default.white, fontFamily: theme.typography.text.font2, fontWeight: "700", fontSize: "32px", lineHeight: "38px", textAlign: "center" }}>Contact Us</Typography>
                    <Typography sx={{ color: theme.palette.default.white, fontWeight: "400", fontSize: "14px", lineHeight: "20px", textAlign: "center", marginTop: "20px" }}>Have questions or need more information? Reach out to us at. </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                        <Box sx={{ bgcolor: theme.palette.primary.dark, display: "flex", cursor: "pointer" }}>
                            <Box sx={{ bgcolor: theme.palette.secondary.a100, marginY: "14px", marginLeft: {lg: "20px", md: "20px", sm: "20px", xs: "5px"}, paddingX: "5px", paddingY: "2px", textAlign: "center" }}>
                                <Typography sx={{ color: theme.palette.text.textprimary, fontWeight: "700", fontSize: "12px", lineHeight: "16px", letterSpacing: "1.5px", textTransform: "uppercase", textAlign: "center", paddingX: "3px" }}>Mail to</Typography>
                            </Box>
                            <Typography sx={{ fontWeight: "600", fontSize: {lg: "18px", md: "18px", sm: "18px", xs: "16px"}, lineHeight: "20px", color: theme.palette.default.white, paddingX: {lg: "20px", md: "20px", sm: "20px", xs: "8px"}, display: "flex", alignItems: "center", paddingLeft: {lg: "10px", md: "10px", sm: "10px", xs: "5px"}, fontFamily: theme.typography.text.font1 }}>info@veridian.com</Typography>
                        </Box>

                        <Box sx={{ bgcolor: theme.palette.secondary.a20, display: "flex", alignItems: "center", paddingX: {lg: "15px", md: "15px", sm: "15px", xs: "5px"} }} ><a href="https://outlook.live.com/mail/0/"><Vector /></a></Box>
                    </Box>
                    <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", textAlign: "center", color: theme.palette.default.white, fontFamily: theme.typography.text.font1, marginTop: "20px", paddingBottom: "10px" }}>&apos;We&apos;re to help!&apos;</Typography>
                </Box>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "none", lg: "block", md: "none" } }}>
                <ContactRight />
            </Box>

        </Box>
    )
}

export default Contact
