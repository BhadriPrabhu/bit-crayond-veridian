import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import AboutText from "../../Store/store";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function InvestMd() {

    const detail = AboutText((state) => state.invest);
    const theme = useTheme();
    const isMobile = useMediaQuery("(min-width: 460px)")


    return (
        <Box sx={{ bgcolor: theme.palette.primary.lite, display: "flex", flexDirection: "column", }}>
            <Box>
                <Typography sx={{ fontFamily: theme.typography.text.font2, fontWeight: "700", fontSize: "28px", lineHeight: "38px", textAlign: "center", marginBottom: "40px" }}>Holistic Investment Approach</Typography>
            </Box>
            <Box sx={{ marginX: "10px" }}>
                <Swiper
                    pagination={{
                        clickable: true,
                        el: ".page-clicked"
                    }}
                    initialSlide={0}
                    slidesPerView={1}
                    modules={[Pagination]}
                    spaceBetween={20}
                    loop={false}
                    className="mySwiper"
                >
                    {detail.map((item) => (
                        <SwiperSlide key={item.id} style={{ backgroundColor: theme.palette.default.white, marginTop: "20px", paddingTop: "30px", display: "flex", justifyContent: "center", height: "580px", }}>
                            <Box key={item.id} sx={{display: "flex", flexDirection: "column", alignItems: "center", marginX: "25px"}}>
                                <Box key={item.id} sx={{ display: "flex", justifyContent: "center" }}>{item.photo}</Box>
                                <Typography key={item.id} sx={{ fontFamily: theme.typography.text.font2, fontWeight: "500", fontSize: "16px", lineHeight: "22px", color: theme.palette.secondary.a30, marginTop: "15px" }}>{item.name}</Typography>
                                <Typography key={item.id} sx={{ color: theme.palette.text.texttertiary, fontWeight: "400", fontSize: "14px", lineHeight: "20px", marginTop: "20px", marginX: "15px" }}>{item.text1}</Typography>
                                <Typography key={item.id} sx={{ color: theme.palette.text.texttertiary, fontWeight: "400", fontSize: "14px", lineHeight: "20px", marginTop: "10px", marginX: "15px" }}>{item.text2}</Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "15px", marginBottom: "15px" }}>
                    <Box className="page-clicked" sx={{
                        display: "flex",
                        justifyContent: "center",
                        // background: "blue",
                        // width: "20px",
                        // height: "28px",
                        // borderRadius: "50%",
                        // marginX: "3px",
                        marginTop: "0px",
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


        </Box>
    )
}

export default InvestMd;
