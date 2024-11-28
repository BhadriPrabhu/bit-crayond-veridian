import { Box, Typography, useTheme } from '@mui/material';
// import AboutText from '../../Store/store';
import PersonJack from '../../assets/images/personjack';
// import PersonJarvis from '../../assets/images/personjarvis';
// import PersonPeter from '../../assets/images/personpeter';
import TeamName from '../../assets/images/teamname'

export default function SlidePage() {
  const theme = useTheme();

  // const detail = AboutText((state) => state.teamtext)

  return (
    <Box sx={{ transform: "skew(25deg)", display: "flex" }}>
      <Box sx={{ marginLeft: "20px", zIndex: "1", marginBottom: "-5px"}}><PersonJack /></Box>
      <Box>
        <Typography sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "20px", color: theme.palette.text.texttertiary, paddingRight: "115px", paddingTop: "30px", marginLeft: "-7px" }}>Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation&apos;s prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation.<br /><br /> He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.</Typography>
        <Box sx={{marginLeft: "-80px", zIndex: "5", marginTop: "40px"}}>
          <TeamName />
          <Typography sx={{ zIndex: "4", marginTop: "-52px", fontFamily: theme.typography.text.font2, color: theme.palette.default.white, fontWeight: "500", fontSize: "18px", lineHeight: "22px", marginLeft: "90px" }}>Grahame Jackson</Typography>
        </Box>
      </Box>



    </Box>
  );
}

