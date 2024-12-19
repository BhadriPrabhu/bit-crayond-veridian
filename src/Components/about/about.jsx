import { Box, Typography, Grid, useTheme } from "@mui/material";
import Logo from "../../assets/logo/logo";  // Assuming Logo is a React component
// import PatternBG from '../../assets/images/patternBG';  // Correct the path of the
import PatternBG1 from '../../assets/images/PatternBG1.png'
import AboutText from '../../Store/store'
// import Slide from "../team/slide";
// import Investment from "../investment/investment";
// import SlideMd from "../team/slidemd";
// import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "../team/slider";


function About() {
  const theme = useTheme();




  // const textdata = AboutText.map(AboutText => AboutText.name )

  const data = AboutText((state) => state.text)


  return (

    <Grid id="about"
      sx={{
        marginTop: "70px",
        bgcolor: theme.palette.primary.lite,
        backgroundImage: `url(${PatternBG1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { lg: "240vh", md: "320vh", xs: "430vh", sm: "340vh", xl: "200vh" },
        paddingX: { xs: "20px", sm: "40px", md: "60px", lg: "90px" },
        display: "flex",
        flexDirection: "column",
        "@media (min-width: 1490px) and (max-width: 1500px)": {
          height: "230vh",
        }, "@media (min-width: 1440px) and (max-width: 1490px)": {
          height: "230vh",
      }, "@media (min-width: 1400px) and (max-width: 1440px)": {
          height: "230vh",
      }, "@media (min-width: 1360px) and (max-width: 1400px)": {
          height: "230vh",
      }, "@media (min-width: 1320px) and (max-width: 1360px)": {
          height: "230vh",
      }, "@media (min-width: 1220px) and (max-width: 1240px)": {
          height: "245vh",
      }, "@media (min-width: 1200px) and (max-width: 1220px)": {
          height: "250vh",
      }, "@media (min-width: 900px) and (max-width: 1000px)": {
          height: "335vh",
      }, "@media (min-width: 800px) and (max-width: 840px)": {
          height: "333vh",
      }, "@media (min-width: 840px) and (max-width: 900px)": {
          height: "330vh",
      }, "@media (min-width: 780px) and (max-width: 800px)": {
          height: "338.5vh",
      }, "@media (min-width: 760px) and (max-width: 780px)": {
          height: "342vh",
      }, "@media (min-width: 740px) and (max-width: 760px)": {
          height: "342vh",
      },"@media (min-width: 720px) and (max-width: 740px)": {
          height: "351vh",
      }, "@media (min-width: 700px) and (max-width: 720px)": {
          height: "361vh"
      }, "@media (min-width: 680px) and (max-width: 700px)": {
          height: "373vh",
      }, "@media (min-width: 670px) and (max-width: 680px)": {
          height: "385vh"
      }, "@media (min-width: 660px) and (max-width: 670px)": {
          height: "400vh",
      },  "@media (min-width: 650px) and (max-width: 660px)": {
          height: "405vh",
      },  "@media (min-width: 635px) and (max-width: 650px)": {
          height: "414vh",
      },  "@media (min-width: 630px) and (max-width: 635px)": {
          height: "434vh",
      },  "@media (min-width: 600px) and (max-width: 630px)": {
          height: "432vh",
      },  "@media (min-width: 550px) and (max-width: 600px)": {
          height: "390vh"
      },  "@media (min-width: 500px) and (max-width: 550px)": {
          height: "407vh"
      },  "@media (min-width: 450px) and (max-width: 500px)": {
          height: "420vh",
      },  "@media (min-width: 400px) and (max-width: 450px)": {
          height: "441vh",
      },  "@media (min-width: 375px) and (max-width: 400px)": {
          height: "460vh",
      },  "@media (min-width: 350px) and (max-width: 375px)": {
          height: "471vh", 
      },  "@media (min-width: 300px) and (max-width: 350px)": {
          height: "510vh",
      }
      }}

    >
      <Grid>
        <Box>
          <Typography variant="h4" sx={{ color: theme.palette.text.textprimary, fontFamily: theme.typography.text.font2, fontWeight: "700", fontSize: "20px", lineHeight: "38px", textAlign: "center", paddingTop: "40px", paddingBottom: "20px", }}>
            About Us
          </Typography>
        </Box>
      </Grid>
      <Grid>
        <Grid sx={{ bgcolor: theme.palette.default.white, display: "flex", justifyContent: { lg: "space-between" }, flexDirection: { sm: "row", xs: "column", lg: "row", md: "row" }, padding: { lg: "45px", sm: "30px", xs: "10px" }, gap: "35px", "@media (min-width: 600px) and (max-width: 630px)": {
          gap: "5px",
      }, }}>
          <Grid
            sx={{
              bgcolor: theme.palette.secondary.a50,
              zIndex: 2,
              paddingX: {lg: "115px", md: "115px", sm: "115px", xs: "5px"},
              paddingY: {lg: "25px", md: "25px", sm: "25px", xs: "5px"},
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Logo />
          </Grid>
          <Grid sx={{ color: theme.palette.text.textsecondary }}>
            <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", }}>Veridian is an investment, management and development company based in Gibraltar. We create value in our investments by leveraging our own experience, using tried-and-true strategies and extensive industry expertise.<br /><br />

              We work with our business management team to develop and implement tailored strategies focused on strong products with powerful sales, to develop profit generating growth models. Value creation is fundamental to our goal and we develop our businesses with this is mind.<br /><br />

              Veridian&apos;s expertise is delivered with a responsible approach to our business, our team, our local community, and the environment.</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { lg: "1fr 1fr", xs: "1fr" }, columnGap: "25px" }}>

          {data.map((item) => (
            <Box key={item.id} sx={{ bgcolor: theme.palette.default.white, marginTop: "25px", display: "flex", padding: "20px", flexDirection: {lg: "row", xl: "row", md: "row", sm: "row", xs: "column-reverse"} }}>
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
        <Slider />
      </Box>


      {/* <Box>
        <Investment/>
      </Box> */}


    </Grid>
  );
}

export default About;
