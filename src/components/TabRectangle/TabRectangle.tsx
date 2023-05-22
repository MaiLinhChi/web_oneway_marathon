import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useLocation, navigate } from '@reach/router';
import qs from 'qs';

import { TSelectOption } from '@/components/Select';
import { getQueryParam, scrollToTop } from '@/utils/functions';

import { ETabRectangleStyleType } from './TabRectangle.enums';
import { TTabRectangleProps } from './TabRectangle.types.d';
import './TabRectangle.scss';

const TabRectangle: React.FC<TTabRectangleProps> = ({
  keyTab,
  value,
  styleType = ETabRectangleStyleType.NORMAL,
  options = [],
  className,
  widthAuto,
  onChange,
  group,
}) => {
  const [isFirstFetching, setIsFirstFetching] = useState<boolean>(true);

  const filterOptions = options.filter((item) => !item.hide);

  const key = keyTab || 'tab';
  const location = useLocation();
  const tabQuery = getQueryParam(key);

  const handleChange = (data: TSelectOption): void => {
    if (group) {
      onChange?.(data);
      return;
    }
    const queryParams = qs.parse(location.search.substring(1));
    onChange?.(data);

    const newQueryParams = {
      ...queryParams,
      [key]: data.value,
    };

    navigate(`${location.pathname}?${qs.stringify(newQueryParams)}`);
  };

  useEffect(() => {
    if (isFirstFetching) {
      if (tabQuery) {
        const activeOption = filterOptions.find((item) => item.value === tabQuery);
        if (activeOption) onChange?.(activeOption);
      } else {
        onChange?.(filterOptions[0]);
      }
      setIsFirstFetching(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabQuery]);

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className={classNames('TabRectangle', styleType, { 'width-auto': widthAuto })}>
      <div className="TabRectangle-list flex items-center">
        {filterOptions.map((option) => {
          const isTabActive = value?.value ? value?.value === option.value : value?._id === option._id;

          return (
            <div
              key={option.value}
              onClick={(): void => handleChange(option)}
              className={classNames('TabRectangle-item', { 'active': isTabActive }, className)}
            >
              {option.label || option.groupName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabRectangle;
