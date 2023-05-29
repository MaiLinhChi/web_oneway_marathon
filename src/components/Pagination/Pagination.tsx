import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import classNames from 'classnames';

import { TPaginationProps } from '@/components/Pagination/Pagination.types';
import Button from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

import './Pagination.scss';

const Pagination: React.FC<TPaginationProps> = ({ page, pageSize, total = 0, className, onChange }) => {
  const itemRender = (
    currentPage: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode,
  ): React.ReactNode => {
    switch (type) {
      case 'prev':
        return <Button iconName={EIconName.AngleLeft} iconColor={EIconColor.BLUE_RIBBON} />;
      case 'next':
        return <Button iconName={EIconName.AngleRight} iconColor={EIconColor.BLUE_RIBBON} />;
      default:
        return originalElement;
    }
  };
  return (
    <div className={classNames('Pagination flex items-center', className)}>
      <AntdPagination
        pageSize={pageSize}
        total={total}
        showQuickJumper={false}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;
