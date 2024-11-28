import { Box, Typography, useTheme } from "@mui/material"
import ContactLeft from '../../assets/images/contactLeft'
import ContactRight from '../../assets/images/contactRight'
import Vector from '../../assets/icons/vector'

function Contact() {

    const theme = useTheme();

    return (
        <Box id="contact" sx={{ bgcolor: theme.palette.primary.main, display: "flex", justifyContent: "space-between" }} >
            <ContactLeft />
            <Box>
                <Box sx={{ marginTop: "60px" }}>
                    <Typography sx={{ color: theme.palette.default.white, fontFamily: theme.typography.text.font2, fontWeight: "700", fontSize: "32px", lineHeight: "38px", textAlign: "center" }}>Contact Us</Typography>
                    <Typography sx={{ color: theme.palette.default.white, fontWeight: "400", fontSize: "14px", lineHeight: "20px", textAlign: "center", marginTop: "20px" }}>Have questions or need more information? Reach out to us at. </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                        <Box sx={{ bgcolor: theme.palette.primary.dark, display: "flex", cursor: "pointer" }}>
                            <Box sx={{ bgcolor: theme.palette.secondary.a100, marginY: "14px", marginLeft: "20px", paddingX: "5px", paddingY: "2px", textAlign: "center" }}>
                                <Typography sx={{ color: theme.palette.text.textprimary, fontWeight: "700", fontSize: "12px", lineHeight: "16px", letterSpacing: "1.5px", textTransform: "uppercase", textAlign: "center", paddingX: "3px" }}>Mail to</Typography>
                            </Box>
                            <Typography sx={{ fontWeight: "600", fontSize: "18px", lineHeight: "20px", color: theme.palette.default.white, paddingX: "20px", display: "flex", alignItems: "center", paddingLeft: "10px", fontFamily: theme.typography.text.font1 }}>info@veridian.com</Typography>
                        </Box>

                        <Box sx={{ bgcolor: theme.palette.secondary.a20, display: "flex", alignItems: "center", paddingX: "15px" }} ><a href="https://outlook.live.com/mail/0/"><Vector /></a></Box>
                    </Box>
                    <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", textAlign: "center", color: theme.palette.default.white, fontFamily: theme.typography.text.font1, marginTop: "20px" }}>&apos;We&apos;re to help!&apos;</Typography>
                </Box>
            </Box>
            <ContactRight />

        </Box>
    )
}

export default Contact
