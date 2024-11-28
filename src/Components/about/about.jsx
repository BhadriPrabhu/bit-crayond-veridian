import { Box, Typography, useTheme } from "@mui/material";
import Logo from "../../assets/logo/logo";  // Assuming Logo is a React component
// import PatternBG from '../../assets/images/patternBG';  // Correct the path of the
import PatternBG1 from '../../assets/images/PatternBG1.png'
import AboutText from '../../Store/store'
import Slide from "../team/slide";
// import Investment from "../investment/investment";

function About() {
  const theme = useTheme();

  // const textdata = AboutText.map(AboutText => AboutText.name )

  const data = AboutText((state) => state.text)


  return (

    <Box id="about"
      sx={{
        marginTop: "70px",
        bgcolor: theme.palette.primary.lite,
        backgroundImage: `url(${PatternBG1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200vh",
        paddingX: "90px",
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ color: theme.palette.text.textprimary, fontFamily: theme.typography.text.font2, fontWeight: "700", fontSize: "32px", lineHeight: "38px", textAlign: "center", paddingTop: "40px", paddingBottom: "20px", }}>
          About Us
        </Typography>
      </Box>
      <Box sx={{ bgcolor: theme.palette.default.white, display: "flex", justifyContent: "space-between", padding: "45px", gap: "35px" }}>
        <Box
          sx={{
            bgcolor: theme.palette.secondary.a50,
            zIndex: 2,
            paddingX: "115px",
            paddingY: "25px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo />
        </Box>
        <Box sx={{ color: theme.palette.text.textsecondary }}>
          <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", }}>Veridian is an investment, management and development company based in Gibraltar. We create value in our investments by leveraging our own experience, using tried-and-true strategies and extensive industry expertise.<br /><br />

            We work with our business management team to develop and implement tailored strategies focused on strong products with powerful sales, to develop profit generating growth models. Value creation is fundamental to our goal and we develop our businesses with this is mind.<br /><br />

            Veridian&apos;s expertise is delivered with a responsible approach to our business, our team, our local community, and the environment.</Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "25px" }}>

          {data.map((item) => (
            <Box key={item.id} sx={{ bgcolor: theme.palette.default.white, marginTop: "25px", display: "flex", padding: "20px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography key={item.id} sx={{ color: theme.palette.text.textprimary, fontWeight: "500", fontSize: "18px", lineHeight: "22px", fontFamily: theme.typography.text.font2 }}>
                  {item.head}
                </Typography>
                <Typography key={item.id} sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", color: theme.palette.text.textsecondary, paddingTop: "15px", paddingRight: "15px" }}>
                  {item.name}
                </Typography>
              </Box>

              <Box key={item.id}>
                {item.icon}
              </Box>

            </Box>

          ))}


        </Box>
      </Box>

      

      <Box>
          <Slide id="team"/>
      </Box>


      {/* <Box>
        <Investment/>
      </Box> */}


    </Box>
  );
}

export default About;
