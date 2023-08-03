import React from 'react';
import BannerSection from '../components/BannerSection';
import Newsletter from '../components/Newsletter';
import BannerSlider from '../components/BannerSlider';

function Home() {
  return (
    <>
      <BannerSection />
      <BannerSlider />
      <Newsletter />
    </>
  );
}

export default Home;