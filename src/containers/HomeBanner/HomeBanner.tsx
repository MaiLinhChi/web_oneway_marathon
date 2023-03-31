import React, { useCallback, useEffect, useState } from 'react';

import Carousels from '@/components/Carousels';
import { dataHomeBannerCarousel } from '@/containers/HomeBanner/HomeBanner.data';
import Button from '@/components/Button';

import { THomeBannerProps } from './HomeBanner.types.d';
import './HomeBanner.scss';
import { getMarathons } from '@/services/api';
import { Link } from '@reach/router';
import { Paths } from '@/pages/routers';

const HomeBanner: React.FC<THomeBannerProps> = () => {
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const requests = {
      params: {
        limit: 3,
        status: 'active',
      },
    };
    const res = await getMarathons({ requests });
    setData(res.data);
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="HomeBanner">
      <Carousels slidesToShow={1} slidesToScroll={1} infinite autoplay dots arrows>
        {data.map((item: any, index) => (
          <div className="HomeBanner-item" key={index}>
            <div className="HomeBanner-item-background">
              <img src={item.image} alt="" />
            </div>
            <div className="HomeBanner-item-wrapper flex items-center justify-center flex-col text-center">
              <h1 className="HomeBanner-item-title" style={{ textShadow: `.8rem .8rem 0 ${item.color}` }}>
                OneWay Marathon
                <br />
                <span style={{ textShadow: `.8rem .8rem 0 ${item.color}` }}>{item.name}</span>
              </h1>
              <div className="HomeBanner-item-btn">
                <Link to={Paths.MarathonsDetail} state={item} style={{ color: 'white' }}>
                  <Button type="primary" title="Xem chi tiết" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousels>
    </div>
  );
};

export default HomeBanner;
