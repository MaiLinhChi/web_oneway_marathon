import React from 'react';

import { ButtonType } from 'antd/lib/button';
import { ButtonHTMLType } from 'antd/lib/button/button';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

import { EIconColor, EIconName } from '@/components/Icon';

export type TButtonProps = {
  className?: string;
  title?: React.ReactNode;
  type?: ButtonType;
  htmlType?: ButtonHTMLType;
  size?: SizeType;
  shadow?: boolean;
  iconName?: EIconName;
  fontWeight?: number;
  danger?: boolean;
  link?: string;
  state?: any;
  iconColor?: EIconColor;
  reverse?: boolean;
  disabled?: boolean;
  loading?: boolean;
  titleColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  onClick?: () => void;
};
