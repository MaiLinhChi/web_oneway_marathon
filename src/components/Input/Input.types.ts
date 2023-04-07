import React, { ChangeEvent } from 'react';

import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type TInputProps = {
  className?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'number';
  value?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  readOnly?: boolean;
  required?: boolean;
  size?: SizeType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
};
