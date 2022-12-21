import React, { useState } from 'react';
import { Dropdown as AntdDropdown } from 'antd';
import classNames from 'classnames';

import { TDropdownMenuProps } from './DropdownMenu.types';
import './DropdownMenu.scss';

const DropdownMenu: React.FC<TDropdownMenuProps> = ({
  trigger,
  placement,
  overlayClassName,
  options = [],
  disabled,
  minWidth,
  onClickMenuItem,
  onVisibleChange,
  children,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleVisibleChange = (currentVisible: boolean): void => {
    onVisibleChange?.(currentVisible);
    setVisible(currentVisible);
  };

  const antdDropdownProps = {
    visible,
    placement,
    disabled,
    overlayClassName: classNames('DropdownMenu-overlay', overlayClassName),
    trigger: trigger || ['click'],
    onVisibleChange: handleVisibleChange,
  };

  const renderDropdownMenuOverlay = (): React.ReactElement => {
    return (
      <div className="DropdownMenu-list" style={{ minWidth }}>
        {options.map((item) => {
          if (item.line) {
            return <div key={item.value} className="DropdownMenu-list-line" />;
          }

          return (
            <div
              key={item.value}
              className={classNames('DropdownMenu-list-item title-3', { danger: item.danger })}
              onClick={(): void => {
                item.onClick?.(item);
                setVisible(false);
                onClickMenuItem?.(item);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="DropdownMenu">
      <AntdDropdown {...antdDropdownProps} overlay={renderDropdownMenuOverlay()}>
        <div className="DropdownMenu-wrapper">{children}</div>
      </AntdDropdown>
    </div>
  );
};

export default DropdownMenu;
