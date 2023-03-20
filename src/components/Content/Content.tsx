import React from 'react';

import { TContentProps } from './Content.types.d';
import './Content.scss';

const Content: React.FC<TContentProps> = ({ children }) => {
  return (
    <div className="Content">
      <div className="container">
        <div className="Content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Content;
