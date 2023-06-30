import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

import './styles.scss';

// import required modules
import { EffectFade, Thumbs } from 'swiper';

import ImageProduct1 from '../../assets/images/image-product-1.jpg';
import ImageProduct2 from '../../assets/images/image-product-2.jpg';
import ImageProduct3 from '../../assets/images/image-product-3.jpg';
import ImageProduct4 from '../../assets/images/image-product-4.jpg';

import ImageProductThumbs1 from '../../assets/images/image-product-1-thumbnail.jpg';
import ImageProductThumbs2 from '../../assets/images/image-product-2-thumbnail.jpg';
import ImageProductThumbs3 from '../../assets/images/image-product-3-thumbnail.jpg';
import ImageProductThumbs4 from '../../assets/images/image-product-4-thumbnail.jpg';

export function SliderSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <div className="SliderContent">
      <Swiper
        effect={'fade'}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade, Thumbs]}
        className=".product-images-slider"
      >
        <SwiperSlide>
          <img src={ImageProduct1} className="product-images-slider-wrapper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageProduct2} className="product-images-slider-wrapper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageProduct3} className="product-images-slider-wrapper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageProduct4} className="product-images-slider-wrapper" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={25}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="product-images-slider-thumbs"
      >
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={ImageProductThumbs1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={ImageProductThumbs2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={ImageProductThumbs3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={ImageProductThumbs4} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
