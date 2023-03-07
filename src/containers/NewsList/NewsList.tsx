import React from 'react';
import { Col, Row } from 'antd';

import NewBlock from '@/components/NewBlock';

import { TNewsListProps } from './NewsList.types.d';
import './NewsList.scss';

const NewsList: React.FC<TNewsListProps> = () => {
  return (
    <section className="NewsList" id="tintuc">
      <div className="container">
        <div className="NewsList-wrapper">
          <h2 className="NewsList-title">
            Tin tức
            <span>OneWay</span>
          </h2>

          <div className="NewsList-list">
            <Row gutter={[16, 16]}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Col span={8} key={item}>
                  <NewBlock />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
