import React from 'react';

import Carousels from '@/components/Carousels';
import { dataHomeBannerCarousel } from '@/containers/HomeBanner/HomeBanner.data';
import Button from '@/components/Button';

import { THomeBannerProps } from './HomeBanner.types.d';
import './HomeBanner.scss';

const HomeBanner: React.FC<THomeBannerProps> = () => {
  return (
    <div className="HomeBanner">
      <Carousels slidesToShow={1} slidesToScroll={1} infinite autoplay dots arrows>
        {dataHomeBannerCarousel.map((item) => (
          <div className="HomeBanner-item">
            <div className="HomeBanner-item-background">
              <img src={item.background} alt="" />
            </div>
            <div className="HomeBanner-item-wrapper flex items-center justify-center flex-col text-center">
              <h1 className="HomeBanner-item-title" style={{ textShadow: `.8rem .8rem 0 ${item.color}` }}>
                OneWay Marathon
                <br />
                <span style={{ textShadow: `.8rem .8rem 0 ${item.color}` }}>{item.title}</span>
              </h1>
              <div className="HomeBanner-item-btn">
                <Button title="Xem chi tiết" />
              </div>
            </div>
          </div>
        ))}
      </Carousels>
    </div>
  );
};

export default HomeBanner;
