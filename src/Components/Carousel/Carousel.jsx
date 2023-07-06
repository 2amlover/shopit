import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import BannerData from '../../Helpers/HomePageBanner';
import 'react-alice-carousel/lib/alice-carousel.css';


const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3, itemsFit: 'contain' },
  };

  const items = BannerData.map((item) => (
    <div key={item.name} style={{ marginTop: 10 }}>
      <img
        src={item.img}
        loading="lazy"
        alt={item.name}
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
      />
    </div>
  ));

  return (
    <AliceCarousel
      animationType="fadeout"
      animationDuration={800}
      disableButtonsControls
      infinite
      items={items}
      mouseTracking
      disableDotsControls
      responsive={responsive}
    />
  );
};

export default Carousel;
