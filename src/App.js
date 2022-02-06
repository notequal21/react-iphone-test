import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './style.module.scss'
// Import Swiper styles
import 'swiper/css';

function App() {
  return (
    <div className="App">

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${style.slide} ${isActive ? style.active : ''}`}>
              rlore adaisjid uahdu  u
            </div>
          )}
        </SwiperSlide>


      </Swiper>

    </div>
  );
}

export default App;
