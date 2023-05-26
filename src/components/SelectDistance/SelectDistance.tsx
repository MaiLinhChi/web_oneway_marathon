import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import numeral from 'numeral';

import { TSelectDistanceProps } from './SelectDistance.types.d';
import './SelectDistance.scss';

const SelectDistance: React.FC<TSelectDistanceProps> = ({ value, onChange, single = [], multiple = [] }) => {
  useEffect(() => {
    if (!value && single?.individual?.length) {
      onChange?.({
        price: single?.individual?.[0]?.price,
        distance: single?.individual?.[0]?.distance,
        state: single.name,
        unit: single?.unit,
      });
    } else if (!value && multiple.length) {
      onChange?.(multiple?.[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [single, multiple, value]);
  return (
    <div className="SelectDistance">
      <Row gutter={[2, 2]}>
        {single?.individual?.length
          ? single?.individual?.map((item: any, index: any) => (
              <Col key={index} span={12} sm={8} lg={24 / single?.individual?.length}>
                <div
                  className={classNames('SelectDistance-item', { active: value?.distance === item.distance })}
                  onClick={(): void =>
                    onChange?.({ price: item.price, distance: item.distance, state: single.name, unit: single.unit })
                  }
                >
                  <div className="SelectDistance-item-distance">
                    {item.distance} <span>{single.unit}</span>
                  </div>
                  <div className="SelectDistance-item-description">{numeral(item.price).format()} VND</div>
                </div>
              </Col>
            ))
          : multiple?.map((item: any, index: any) => (
              <Col key={index} span={12} sm={8} lg={24 / multiple.length}>
                <div
                  className={classNames('SelectDistance-item', { active: value?._id === item._id })}
                  onClick={(): void => onChange?.(item)}
                >
                  <div className="SelectDistance-item-distance">
                    {item.percent ? <span>-{item.percent}%</span> : <span>-</span>}
                  </div>
                  <div className="SelectDistance-item-description">
                    {item.numberPerson.from ? `${item.numberPerson.from}-` : '>'}
                    {item.numberPerson.to} thành viên
                  </div>
                </div>
              </Col>
            ))}
      </Row>
    </div>
  );
};

export default SelectDistance;
