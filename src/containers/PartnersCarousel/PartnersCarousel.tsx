import React from 'react';
import { Link } from '@reach/router';

import Carousels from '@/components/Carousels';
import { dataFooterPartnerLinks } from '@/containers/Footer/Footer.data';

import { TPartnersCarouselProps } from './PartnersCarousel.types.d';
import './PartnersCarousel.scss';

const PartnersCarousel: React.FC<TPartnersCarouselProps> = () => {
  return (
    <section className="PartnersCarousel" id="doitac">
      <div className="container">
        <div className="PartnersCarousel-wrapper">
          <Carousels infinite autoplay slidesToShow={8} dots={false} arrows={false} slidesToScroll={2}>
            {dataFooterPartnerLinks(true).map((item, index) => (
              <div className="PartnersCarousel-item" style={{ maxWidth: item.maxWidth }} key={index}>
                <Link to={item.link}>
                  <img src={item.logo} alt="" />
                </Link>
              </div>
            ))}
          </Carousels>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
