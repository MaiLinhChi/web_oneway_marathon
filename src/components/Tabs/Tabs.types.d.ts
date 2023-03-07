import { SizeType } from 'antd/lib/config-provider/SizeContext';
import React from 'react';

export type TTabsProps = {
  data: TTabsData[];
  activeKey?: string;
  className?: string;
  size?: SizeType;
  defaultActiveKey?: string;
  onChange?: (activeKey: string) => void;
};

export type TTabsData = {
  key: string;
  title: React.ReactNode;
  children?: React.ReactNode;
};
