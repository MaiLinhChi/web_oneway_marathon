import React from 'react';
import classNames from 'classnames';
import { Checkbox as AntdCheckbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import { TCheckboxProps } from '@/components/Checkbox/Checkbox.types';

import './Checkbox.scss';

const Checkbox: React.FC<TCheckboxProps> = ({ className, label, onChange, value }) => {
  const handleCheckboxChange = (e: CheckboxChangeEvent): void => {
    const { checked } = e.target;
    onChange?.(checked);
  };

  return (
    <div className={classNames('Checkbox', className)}>
      <AntdCheckbox checked={value} onChange={handleCheckboxChange}>
        {label}
      </AntdCheckbox>
    </div>
  );
};

export default Checkbox;
