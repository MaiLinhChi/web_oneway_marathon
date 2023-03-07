import React from 'react';

import { TIconProps } from '@/components/Icon/Icon.types';
import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.7877 9.05788C17.9949 9.31628 18.1097 9.65199 18.1097 10.0001C18.1097 10.3482 17.9949 10.6839 17.7877 10.9423C16.4752 12.5314 13.4877 15.6251 10.0002 15.6251C6.51267 15.6251 3.52518 12.5314 2.21267 10.9423C2.00537 10.6839 1.89062 10.3482 1.89062 10.0001C1.89062 9.65199 2.00537 9.31628 2.21267 9.05788C3.52518 7.46879 6.51267 4.375 10.0002 4.375C13.4877 4.375 16.4752 7.46879 17.7877 9.05788Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
