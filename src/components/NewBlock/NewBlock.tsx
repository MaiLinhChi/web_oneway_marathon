import React from 'react';
import { Link } from '@reach/router';

import ImageNewBlock from '@/assets/images/image-new-block.png';
import { Paths } from '@/pages/routers';

import { TNewBlockProps } from './NewBlock.types.d';
import './NewBlock.scss';

const NewBlock: React.FC<TNewBlockProps> = () => {
  return (
    <div className="NewBlock flex items-center">
      <div className="NewBlock-image">
        <img src={ImageNewBlock} alt="" />
      </div>
      <div className="NewBlock-info">
        <Link to={Paths.Home} className="NewBlock-info-title">
          Sports Backers is a nationally recognized{' '}
        </Link>
        <div className="NewBlock-info-description">
          Sports Backers is a nationally recognized nonprofit, committed to making all
        </div>
      </div>
    </div>
  );
};

export default NewBlock;
