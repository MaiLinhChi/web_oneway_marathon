import React from 'react';
import { TimePicker as AntdTimePicker } from 'antd';
import classNames from 'classnames';

import { EFormat } from '@/common/enums';
import Icon, { EIconName } from '@/components/Icon';
import { TTimePickerProps } from './TimePicker.types';
import './TimePicker.scss';

const TimePicker: React.FC<TTimePickerProps> = ({
  className,
  value,
  placeholder,
  disabled,
  showNow,
  disabledDate,
  onChange,
}) => {
  return (
    <div className={classNames('TimePicker', className)}>
      <AntdTimePicker
        // format={EFormat.DATE_TIME}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        disabledDate={disabledDate}
        getPopupContainer={(trigger): HTMLElement => trigger?.parentNode as any}
        allowClear={false}
        showNow={showNow}
        // suffixIcon={<Icon name={EIconName.Calendar} />}
      />
    </div>
  );
};

export default TimePicker;
