import React from 'react';
import classNames from 'classnames';
import { Input } from 'antd';

import { TTextAreaProps } from '@/components/TextArea/TextArea.types';

import './TextArea.scss';

const { TextArea: AntdTextArea } = Input;

const TextArea: React.FC<TTextAreaProps> = ({ className, size, placeholder, onChange, value }) => {
  return (
    <div className={classNames('TextArea', className)}>
      <AntdTextArea size={size} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default TextArea;
