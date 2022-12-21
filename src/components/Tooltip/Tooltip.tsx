import React from 'react';
import { Tooltip as AntdTooltip } from 'antd';
import classNames from 'classnames';

import { TTooltipProps } from './Tooltip.types';
import './Tooltip.scss';

const Tooltip: React.FC<TTooltipProps> = ({ title, placement, className, overlayClassName, children }) => {
  return (
    <AntdTooltip
      className={classNames('Tooltip', className)}
      title={title}
      placement={placement}
      getPopupContainer={(trigger: HTMLElement): HTMLElement => trigger}
      overlayClassName={classNames('Tooltip-overlay', overlayClassName)}
    >
      <div className="Tooltip-wrapper">{children}</div>
    </AntdTooltip>
  );
};

export default Tooltip;
