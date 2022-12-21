import React from 'react';

import ImageBanner2 from '@/assets/images/image-banner-2.png';
import PartnersCarousel from '@/containers/PartnersCarousel';
import Banner from '@/components/Banner';
import NewsList from '@/containers/NewsList';
import HomeBanner from '@/containers/HomeBanner';
import Introduction from '@/containers/Introduction';
import Activities from '@/containers/Activities';
import TournamentSystem from '@/containers/TournamentSystem';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <HomeBanner />
      <Introduction />
      <Activities />
      <TournamentSystem />
      <NewsList />
      <Banner id="hinhanh" image={ImageBanner2} />
      <PartnersCarousel />
    </div>
  );
};

export default Home;
