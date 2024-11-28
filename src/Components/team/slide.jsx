import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import SlidePage from './slidepage';
import SlidePage2 from './slidepage2';
import SlidePage3 from './slidepage3';
import PrevIcon from '../../assets/icons/prevIcon';
import NextIcon from '../../assets/icons/nextIcon';
import { Box, IconButton, Typography, useTheme } from '@mui/material';

export default function Slide() {
  const theme = useTheme();
  const prevRef = useRef(null); 
  const nextRef = useRef(null); 

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);


  return (
    <Box id="team" sx={{ marginTop: '100px', marginX: '-90px', position: 'relative' }}>
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

      {/* Custom Previous Button */}
      <IconButton
        ref={prevRef}
        id='prevbtn'
        aria-label="Previous Slide"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          zIndex: 10,
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          px: '12px',
          backgroundColor: theme.palette.secondary.a40,
          display: isBeginning ? "none" : "block",
          '&:hover': {
            backgroundColor: theme.palette.secondary.a40,
          },
        }}
      >
        <PrevIcon />
      </IconButton>

      {/* Custom Next Button */}
      <IconButton
        ref={nextRef}
        aria-label="Next Slide"
        id='nextbtn'
        sx={{
          position: 'absolute',
          top: '50%',
          right: '12px',
          zIndex: 10,
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          paddingX: '10px',
          backgroundColor: theme.palette.secondary.a40,
          display: isEnd ? "none" : "block",
          '&:hover': {
            backgroundColor: theme.palette.secondary.a40,
          },
        }}
      >
        <NextIcon />
      </IconButton>

      {/* Swiper Component */}
      <Swiper
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={80}
        initialSlide={1}
        // loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onInit={(swiper) => {
          if (prevRef.current && nextRef.current) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);}}
        modules={[Pagination, Navigation]}
        className="mySwiper"

      >
        <SwiperSlide style={{ transform: 'skew(-25deg)', backgroundColor: 'white' }}>
          <SlidePage />
        </SwiperSlide>
        <SwiperSlide style={{ transform: 'skew(-25deg)', backgroundColor: 'white' }}>
          <SlidePage2 />
        </SwiperSlide>
        <SwiperSlide style={{ transform: 'skew(-25deg)', backgroundColor: 'white' }}>
          <SlidePage3 />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
