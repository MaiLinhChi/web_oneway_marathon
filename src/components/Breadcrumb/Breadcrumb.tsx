import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import classNames from 'classnames';

import { TBreadcrumbProps } from './Breadcrumb.types.d';
import './Breadcrumb.scss';

const Breadcrumb: React.FC<TBreadcrumbProps> = ({ className, options = [], separator }) => {
  return (
    <AntdBreadcrumb className={classNames('Breadcrumb', className)} separator={separator}>
      {options.map((option) => (
        <AntdBreadcrumb.Item key={option.key} onClick={option.onClick}>
          {option.title}
        </AntdBreadcrumb.Item>
      ))}
    </AntdBreadcrumb>
  );
};

export default Breadcrumb;
