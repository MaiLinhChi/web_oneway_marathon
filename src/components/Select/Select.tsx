import React, { useEffect, useState } from 'react';
import { Select as AntdSelect } from 'antd';
import classNames from 'classnames';

import { getTotalPage, searchString } from '@/utils/functions';
import { useDebounce } from '@/utils/hooks';
import { ETimeoutDebounce } from '@/common/enums';
import WrapperLazyLoad from '@/components/WrapperLazyLoad';
import Icon, { EIconName } from '@/components/Icon';

import { TSelectProps } from './Select.types';
import './Select.scss';

const Select: React.FC<TSelectProps> = ({
  placeholder,
  disabled,
  options = [],
  showSearch,
  value,
  className,
  defaultValue,
  allowClear,
  dropdownClassName,
  paginate,
  onSearch,
  onLoadMore,
  onChange,
}) => {
  const [keyword, setKeyword] = useState<string>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const searchValueDebounce = useDebounce(keyword, ETimeoutDebounce.SEARCH);

  const filterOption = (input: string, option: any): boolean => {
    return searchString(option.label, keyword);
  };

  const handleSearch = (keywordValue: string): void => {
    setKeyword(keywordValue);
  };

  const dropdownRender = (menu: React.ReactElement): React.ReactElement => {
    return (
      <div className={classNames('Select-dropdown', dropdownClassName)}>
        <div className="Select-dropdown-main">
          <WrapperLazyLoad maxHeight={256} onEnd={handleScrollEnd}>
            {menu}
          </WrapperLazyLoad>
        </div>
      </div>
    );
  };

  const handleScrollEnd = (): void => {
    if (onSearch && paginate) {
      const isLoadMore = paginate.page < getTotalPage(paginate.total, paginate.pageSize);
      if (isLoadMore) {
        onLoadMore?.();
      }
    }
  };

  const handleClear = (): void => {
    onChange?.(null);
  };

  useEffect(() => {
    if (isMounted && onSearch) {
      onSearch?.(searchValueDebounce);
    }

    setIsMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValueDebounce]);

  return (
    <div className={classNames('Select', className)}>
      <AntdSelect
        className="Select-control"
        value={value}
        showSearch={showSearch}
        placeholder={placeholder}
        defaultValue={defaultValue}
        labelInValue
        allowClear={allowClear}
        filterOption={onSearch ? false : filterOption}
        onSearch={showSearch ? handleSearch : undefined}
        options={options}
        searchValue={keyword}
        dropdownClassName={classNames('Select-dropdown', dropdownClassName)}
        getPopupContainer={(trigger: HTMLElement): HTMLElement => trigger?.parentNode as any}
        onChange={onChange}
        onClear={handleClear}
        dropdownRender={dropdownRender}
        disabled={disabled}
        virtual={false}
        suffixIcon={<Icon name={EIconName.AngleDown} />}
      />
    </div>
  );
};

export default Select;
