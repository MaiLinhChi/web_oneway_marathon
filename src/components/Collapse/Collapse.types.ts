import { ExpandIconPosition } from 'antd/lib/collapse/Collapse';
import React from 'react';

export type TCollapseProps = {
  className?: string;
  accordion?: boolean;
  defaultActiveKey?: string | string[];
  activeKey?: string | string[];
  data?: TCollapseData[];
  expandIconPosition?: ExpandIconPosition;
  onChange?: (key: string | string[]) => void;
};

export type TCollapseData = {
  key: string;
  header: React.ReactNode;
  children?: React.ReactNode;
};
