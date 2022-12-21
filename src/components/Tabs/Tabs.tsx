import React from 'react';
import classNames from 'classnames';
import { Tabs as AntdTabs } from 'antd';

import { TTabsProps } from './Tabs.types.d';
import './Tabs.scss';

const { TabPane } = AntdTabs;

const Tabs: React.FC<TTabsProps> = ({ defaultActiveKey, size, data = [], className, activeKey, onChange }) => {
  return (
    <div className={classNames('Tabs', className)}>
      <AntdTabs activeKey={activeKey} defaultActiveKey={defaultActiveKey} size={size} onChange={onChange}>
        {data.map((item) => (
          <TabPane tab={item.title} key={item.key}>
            {item.children}
          </TabPane>
        ))}
      </AntdTabs>
    </div>
  );
};

export default Tabs;
