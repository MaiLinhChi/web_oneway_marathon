import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 6L18 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default Svg;
