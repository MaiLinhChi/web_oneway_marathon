import React from 'react';
import { Rate as AntdRate } from 'antd';

import { TRateProps } from './Rate.types.d';
import './Rate.scss';

const Rate: React.FC<TRateProps> = ({ value, onChange, disabled, allowClear, allowHalf }) => {
  return (
    <div className="Rate">
      <AntdRate value={value} onChange={onChange} disabled={disabled} allowClear={allowClear} allowHalf={allowHalf} />
    </div>
  );
};

export default Rate;
