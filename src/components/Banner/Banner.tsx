import React from 'react';
import classNames from 'classnames';

import { TBannerProps } from './Banner.types.d';
import './Banner.scss';

const Banner: React.FC<TBannerProps> = ({ id, height, text, subText, image, backgroundFitContent, children }) => {
  return (
    <div className={classNames('Banner', { 'fit-content': backgroundFitContent })} id={id}>
      <div className="Banner-image" style={{ height }}>
        <img src={image} alt="" />
      </div>
      {(text || subText) && (
        <div className="Banner-overlay">
          <div className="container">
            <div className="Banner-wrapper">
              <h2 className="Banner-text">
                {text}
                {subText && <span>{subText}</span>}
              </h2>
              <div className="Banner-body">{children}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
