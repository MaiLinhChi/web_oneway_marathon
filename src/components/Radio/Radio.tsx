import React from 'react';
import classNames from 'classnames';
import { Radio as AntdRadio, RadioChangeEvent, Space } from 'antd';

import { TRadioProps } from '@/components/Radio/Radio.types';

import './Radio.scss';

const Radio: React.FC<TRadioProps> = ({ className, options = [], spacing, onChange, value }) => {
  const handleRadioChange = (e: RadioChangeEvent): void => {
    const currentValue = e.target.value;
    const option = options.find((item) => item.bankCode === currentValue.bankCode);
    if (option) onChange?.(option);
  };
  return (
    <div className={classNames('Radio', className)}>
      <AntdRadio.Group onChange={handleRadioChange} value={options.find((item) => item.bankCode === value?.bankCode)}>
        <Space direction="vertical" size={spacing}>
          {options.map((item) => (
            <AntdRadio key={item._id} value={item}>
              {item.name}
            </AntdRadio>
          ))}
        </Space>
      </AntdRadio.Group>
    </div>
  );
};

export default Radio;
