import React from 'react';

import { TIconProps } from '@/components/Icon/Icon.types';
import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-eye-off"
      width="20"
      height="20"
      viewBox="0 0 22 22"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M18.8477 6.41086L17.8977 4.36086L15.8477 3.41086L17.8977 2.46086L18.8477 0.410858L19.7977 2.46086L21.8477 3.41086L19.7977 4.36086L18.8477 6.41086ZM3.94766 21.1109L1.14766 18.3109C0.947656 18.1109 0.847656 17.8692 0.847656 17.5859C0.847656 17.3025 0.947656 17.0609 1.14766 16.8609L12.2977 5.71086C12.4977 5.51086 12.7393 5.41086 13.0227 5.41086C13.306 5.41086 13.5477 5.51086 13.7477 5.71086L16.5477 8.51086C16.7477 8.71086 16.8477 8.95252 16.8477 9.23586C16.8477 9.51919 16.7477 9.76086 16.5477 9.96086L5.39766 21.1109C5.19766 21.3109 4.95599 21.4109 4.67266 21.4109C4.38932 21.4109 4.14766 21.3109 3.94766 21.1109ZM13.0227 10.6359L14.4227 9.23586L13.0227 7.83586L11.6227 9.23586L13.0227 10.6359Z"
        fill="#001375"
      />
    </svg>
  );
};

export default Svg;
