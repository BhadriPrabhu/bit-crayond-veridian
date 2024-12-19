import { Box, Typography, useTheme } from '@mui/material';
// import AboutText from '../../Store/store';
// import PersonJack from '../../assets/images/personjack';
import PersonJarvis from '../../assets/images/personjarvis';
// import PersonPeter from '../../assets/images/personpeter';
import TeamName from '../../assets/images/teamname'

export default function SlidePage2() {
  const theme = useTheme();

  // const detail = AboutText((state) => state.teamtext)

  return (
    <Box sx={{ transform: "skew(25deg)", display: "flex", marginBottom: "-23px" }}>
      <Box sx={{ marginLeft: "20px", zIndex: "1", marginTop: "60px"}}><PersonJarvis/></Box>
      <Box>
        <Typography sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "20px", color: theme.palette.text.texttertiary, paddingRight: "105px", paddingTop: "40px", marginLeft: "-7px", paddingBottom: "90px",  "@media (min-width: 1440px) and (max-width: 1490px)": {
            paddingRight: "65px",
        }, "@media (min-width: 1400px) and (max-width: 1440px)": {
            paddingRight: "10px",
        }, "@media (min-width: 1360px) and (max-width: 1400px)":{
            paddingRight: "0px",
        }, "@media (min-width: 1320px) and (max-width: 1360px)": {
            paddingTop: "30px",
            paddingRight: "0px",
        }, "@media (min-width: 1280px) and (max-width: 1320px)": {
            paddingRight: "0px",
            paddingTop: "25px"
        }, "@media (min-width: 1240px) and (max-width: 1280px)": {
            paddingRight: "0px",
            paddingTop: "25px",
        }, "@media (min-width: 1200px) and (max-width: 1240px)": {
            paddingRight: "0px",
            paddingTop: "20px",
            lineHeight: "19px",
        } }}>Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian&apos;s current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.</Typography>
        <Box sx={{marginLeft: "-50px", zIndex: "5", marginTop: "15px", "@media (min-width: 1440px) and (max-width: 1490px)": {
            
        }}}>
          <TeamName />
          <Typography sx={{ zIndex: "4", marginTop: "-60px", fontFamily: theme.typography.text.font2, color: theme.palette.default.white, fontWeight: "500", fontSize: "18px", lineHeight: "22px", marginLeft: "50px" }}>Julian Jarvis</Typography>
          <Typography sx={{fontWeight: "400", fontSize: "14px", lineHeight: "20px", color: theme.palette.default.white, marginLeft: "50px", marginTop: "5px"}}>Chairman, Founder and CEO</Typography>
        </Box>
      </Box>



    </Box>
  );
}