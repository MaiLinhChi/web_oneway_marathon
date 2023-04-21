import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import classNames from 'classnames';

import { EFormat } from '@/common/enums';
import Icon, { EIconName } from '@/components/Icon';
import { TDatePickerProps } from './DatePicker.types';
import './DatePicker.scss';

const DatePicker: React.FC<TDatePickerProps> = ({
  className,
  value,
  placeholder,
  disabled,
  disabledDate,
  onChange,
}) => {
  return (
    <div className={classNames('DatePicker', className)}>
      <AntdDatePicker
        format={EFormat.DATE}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        disabledDate={disabledDate}
        getPopupContainer={(trigger): HTMLElement => trigger?.parentNode as any}
        allowClear={false}
        suffixIcon={<Icon name={EIconName.Calendar} />}
      />
    </div>
  );
};

export default DatePicker;
