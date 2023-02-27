import React from 'react';
import classNames from 'classnames';
import { navigate } from '@reach/router';
import Icon, { EIconName } from '@/components/Icon';
import { TCopyToClipboardProps } from './CopyToClipboard.types';
import copy from 'copy-to-clipboard';

import './CopyToClipboard.scss';

const CopyToClipboard: React.FC<TCopyToClipboardProps> = ({ className, title }) => {
  const handleClickCopyToClipboard = (): void => {
    copy(title ? title.trim() : '');
  };
  return (
    <div className={classNames('CopyToClipboard', className)} onClick={handleClickCopyToClipboard}>
      {title}
      <div className="CopyToClipboard-icon">
        <Icon name={EIconName.Copy} color="#1964FF" className="size" />
      </div>
    </div>
  );
};

export default CopyToClipboard;
