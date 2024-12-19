import { Swiper, SwiperSlide } from 'swiper/react';
import AboutText from '../../Store/store';
import TeamName from '../../assets/images/teamname';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import TeamNameMd from '../../assets/images/teamNameMd';

function SlideMd() {
    const data1 = AboutText((state) => state.mobile);
    const theme = useTheme();
    const isSlide = useMediaQuery("(min-width:900px)");
    const slidesper = isSlide ? 1.3 : 1;
    const isTeamName = useMediaQuery("(min-width:400px)");

    return (
        <Box sx={{ marginTop: '80px', marginX: slidesper ? "-30px" : "-50px", }}>
            <Typography
                sx={{
                    fontFamily: theme.typography.text.font2,
                    fontWeight: '700',
                    fontSize: '32px',
                    lineHeight: '38px',
                    textAlign: 'center',
                    marginBottom: '50px',
                    color: theme.palette.text.textprimary,
                }}
            >
                Our Team
            </Typography>

            <Swiper
                pagination={{
                    clickable: true,
                    el: '.page-click',
                }}
                initialSlide={1}
                slidesPerView={slidesper}
                modules={[Pagination]}
                loop={false}
                className="mySwiper"
            // style={{display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                {data1.map((item, index) => (
                    <SwiperSlide key={`${item.id}-${index}`} >
                        <Box sx={{
                            backgroundColor: "white", marginX: { lg: "5px", md: "5px", sm: "5px", xs: "15px" }, height: { md: "650px", sm: "640px", xs: "700px" }, padding: {md: "30px", sm: "30px", xs: "10px"}, "@media (min-width: 600px) and (max-width: 635px)": {
                                height: "730px",
                            }, "@media (min-width: 900px) and (max-width: 945px)": {
                                height: "680px"
                            }, "@media (min-width: 460px) and (max-width: 510px)": {
                                height: "730px"
                            }, "@media (min-width: 430px) and (max-width: 460px)": {
                                height: "765px"
                            }, "@media (min-width: 400px) and (max-width: 430px)": {
                                height: "800px",
                            }, "@media (min-width: 360px) and (max-width: 400px)": {
                                height: "840px"
                            }, "@media (min-width: 330px) and (max-width: 360px)": {
                                height: "885px"
                            }, "@media (min-width: 300px) and (max-width: 330px)": {
                                height: "950px"
                            }
                        }}>
                            <Box>{item.photo1}</Box>
                            <Box sx={{ display: "flex", marginTop: "-10px", marginBottom: "20px" }}>
                                {isTeamName ? <TeamName /> : <TeamNameMd/>}
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <Typography sx={{ fontFamily: theme.typography.text.font2, color: theme.palette.default.white, fontWeight: "500", fontSize: "18px", lineHeight: "22px", zIndex: "10", marginLeft: "-300px", padding: "7px", "@media (min-width: 300px) and (max-width: 400px)": {
                                        marginLeft: "-240px",
                                    } }}>{item.name}</Typography>
                                    <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", color: theme.palette.default.white, marginLeft: "-300px", "@media (min-width: 300px) and (max-width: 400px)": {
                                        marginLeft: "-285px"
                                    } }}>{item.about}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", color: theme.palette.text.texttertiary, }} dangerouslySetInnerHTML={{ __html: item.text }}></Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}

            </Swiper>
            <Box sx={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                <Box className="page-click" sx={{
                    display: "flex",
                    justifyContent: "center",
                    // background: "blue",
                    // width: "20px",
                    // height: "28px",
                    // borderRadius: "50%",
                    // marginX: "3px",
                    marginTop: "10px",
                    ".swiper-pagination-bullet": {
                        // backgroundColor: theme.palette.default.white,
                    },
                    ".swiper-pagination-bullet-active": {
                        backgroundColor: theme.palette.secondary.main,
                        width: "20px",
                        padding: "0px 10px",
                        borderRadius: "10px",
                        height: "20px",
                    },
                    ".swiper-pagination-bullet:not(.swiper-pagination-bullet-active)": {
                        // color: theme.palette.primary.dark,
                        backgroundColor: "red !important",
                        width: "20px",
                        height: "20px",
                        marginX: "4px",
                        
                    }, 
                }}>

                </Box>
                
            </Box>  



        </Box>
    );
}

export default SlideMd;
