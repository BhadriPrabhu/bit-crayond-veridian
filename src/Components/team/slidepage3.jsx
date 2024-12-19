import { Box, Typography, useTheme } from '@mui/material';
// import AboutText from '../../Store/store';
// import PersonJack from '../../assets/images/personjack';
// import PersonJarvis from '../../assets/images/personjarvis';
import PersonPeter from '../../assets/images/personpeter';
import TeamName from '../../assets/images/teamname'

export default function SlidePage3() {
  const theme = useTheme();

  // const detail = AboutText((state) => state.teamtext)

  return (
    <Box sx={{ transform: "skew(25deg)", display: "flex", marginBottom: "-17px" }}>
      <Box sx={{ zIndex: "1", marginTop: "80px"}}><PersonPeter /></Box>
      <Box>
        <Typography sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "20px", color: theme.palette.text.texttertiary, paddingRight: "17px", paddingTop: "30px", marginLeft: "-20px" , "@media (min-width: 1400px) and (max-width: 1440px)": {
          paddingTop: "35px",
          lineHeight: "20px",
        }, "@media (min-width: 1360px) and (max-width: 1400px)": {
          lineHeight: "19px",
          paddingTop: "30px"
        }, "@media (min-width: 1320px) and (max-width: 1360px)": {
          lineHeight: "18px",
          marginLeft: "-30px",
          paddingTop: "30px",
        }, "@media (min-width: 1280px) and (max-width: 1340px)": {
          lineHeight: "18px",
          paddingTop: "20px",
          marginLeft: "-25px",
        }, "@media (min-width: 1240px) and (max-width: 1280px)": {
          lineHeight: "16px",
          paddingTop: "20px",
          marginLeft: "-25px",
        }, "@media (min-width: 1200px) and (max-width: 1240px)": {
          lineHeight: "16px",
          paddingTop: "20px",
          marginLeft: "-25px",
        }
        }}>Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally. This has included working with investment groups and private client family offices.In his capacity as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar and international commercial and private client matters.<br/><br/> Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise on restructuring, merger and consolidation exercises. He has also been involved in drafting numerous changes to Gibraltar’s legislation in trusts, financial services and gaming. Peter was Gibraltar’s Minister for Trade and Industry, with responsibility for economic development and financial services, between May 1996 and February 2000.  Peter was appointed KC in Gibraltar in June 2014.</Typography>
        <Box sx={{marginLeft: "-70px", zIndex: "5", marginTop: "40px"}}>
          <TeamName />
          <Typography sx={{ zIndex: "4", marginTop: "-52px", fontFamily: theme.typography.text.font2, color: theme.palette.default.white, fontWeight: "500", fontSize: "18px", lineHeight: "22px", marginLeft: "80px" }}>Peter Montegriffo KC</Typography>
        </Box>
      </Box>



    </Box>
  );
}