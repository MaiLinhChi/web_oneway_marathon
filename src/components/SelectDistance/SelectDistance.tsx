import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';

import { TSelectDistanceProps } from './SelectDistance.types.d';
import './SelectDistance.scss';

const SelectDistance: React.FC<TSelectDistanceProps> = ({ value, onChange, data = [] }) => {
  useEffect(() => {
    if (!value) {
      onChange?.(data?.[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, value]);

  return (
    <div className="SelectDistance">
      <Row gutter={[2, 2]}>
        {data.map((item) => (
          <Col key={item.value} span={24 / data.length}>
            <div
              className={classNames('SelectDistance-item', { active: value?.value === item.value })}
              onClick={(): void => onChange?.(item)}
            >
              <div className="SelectDistance-item-distance">
                {item.label} <span>{item.suffix}</span>
              </div>
              <div className="SelectDistance-item-description">{item.description}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SelectDistance;
