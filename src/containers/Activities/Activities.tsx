import React from 'react';
import { Col, Row } from 'antd';

import ImageBanner1 from '@/assets/images/image-banner-1.png';
import Banner from '@/components/Banner';

import { TActivitiesProps } from './Activities.types.d';
import './Activities.scss';
import { dataActivitiesLinks } from './Activities.data';

const Activities: React.FC<TActivitiesProps> = () => {
  return (
    <section className="Activities">
      <Banner image={ImageBanner1} text="Hoạt động" subText="bên lề" backgroundFitContent>
        <div className="Activities-wrapper">
          <Row gutter={[24, 24]}>
            {dataActivitiesLinks.map((item: any, index) => (
              <Col key={index} xs={{ span: 12 }} lg={{ span: 8 }}>
                <div className="Activities-item">
                  <div className="Activities-item-image" style={{ backgroundImage: `url(${item.image})` }} />
                  <h3 className="Activities-item-title">{item.title}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Banner>
    </section>
  );
};

export default Activities;
