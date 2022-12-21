import React from 'react';
import { Switch as AntdSwitch } from 'antd';

import { TSwitchProps } from './Switch.types';
import './Switch.scss';

const Switch: React.FC<TSwitchProps> = ({ value, onChange }) => {
  return (
    <div className="Switch">
      <AntdSwitch checked={value} onChange={onChange} />
    </div>
  );
};

export default Switch;
