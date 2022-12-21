import React from 'react';
import classNames from 'classnames';
import { Collapse as AntdCollapse } from 'antd';

import { TCollapseProps } from '@/components/Collapse/Collapse.types';

import './Collapse.scss';

const { Panel } = AntdCollapse;

const Collapse: React.FC<TCollapseProps> = ({
  data = [],
  className,
  accordion,
  defaultActiveKey,
  activeKey,
  expandIconPosition,
  onChange,
}) => {
  return (
    <div className={classNames('Collapse', className)}>
      <AntdCollapse
        accordion={accordion}
        defaultActiveKey={defaultActiveKey}
        activeKey={activeKey}
        expandIconPosition={expandIconPosition}
        onChange={onChange}
      >
        {data.map((item) => (
          <Panel key={item.key} header={item.header}>
            {item.children}
          </Panel>
        ))}
      </AntdCollapse>
    </div>
  );
};

export default Collapse;
