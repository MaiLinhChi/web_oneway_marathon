import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import numeral from 'numeral';

import { TSelectDistanceProps } from './SelectDistance.types.d';
import './SelectDistance.scss';

const SelectDistance: React.FC<TSelectDistanceProps> = ({ value, onChange, data = [] }) => {
  useEffect(() => {
    if (!value) {
      onChange?.({ price: data?.[0]?.price, distance: data?.[0]?.distance, state: data[0]?.name });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, value]);
  return (
    <div className="SelectDistance">
      <Row gutter={[2, 2]}>
        {data?.map((item, index) => (
          <Col key={index} span={12} sm={8} lg={24 / data.length}>
            <div
              className={classNames('SelectDistance-item', { active: value?.distance === item.distance })}
              onClick={(): void => onChange?.({ price: item.individual, distance: item.distance, state: data[0].name })}
            >
              <div className="SelectDistance-item-distance">
                {item.distance} <span>M</span>
              </div>
              <div className="SelectDistance-item-description">{numeral(item.individual).format()} VND</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SelectDistance;
