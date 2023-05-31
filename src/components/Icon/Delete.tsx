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
      viewBox="0 0 17 16"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M8.40234 0C3.98334 0 0.402344 3.582 0.402344 8C0.402344 12.418 3.98334 16 8.40234 16C12.8213 16 16.4023 12.418 16.4023 8C16.4023 3.582 12.8213 0 8.40234 0ZM12.1093 10.293C12.2969 10.4805 12.4022 10.7348 12.4022 11C12.4022 11.2652 12.2969 11.5195 12.1093 11.707C11.9218 11.8945 11.6675 11.9998 11.4023 11.9998C11.1372 11.9998 10.8829 11.8945 10.6953 11.707L8.40234 9.414L6.10934 11.707C6.01669 11.8002 5.90653 11.8741 5.7852 11.9246C5.66386 11.9751 5.53375 12.001 5.40234 12.001C5.27094 12.001 5.14082 11.9751 5.01949 11.9246C4.89816 11.8741 4.788 11.8002 4.69534 11.707C4.6024 11.6142 4.52866 11.504 4.47835 11.3827C4.42804 11.2614 4.40214 11.1313 4.40214 11C4.40214 10.8687 4.42804 10.7386 4.47835 10.6173C4.52866 10.496 4.6024 10.3858 4.69534 10.293L6.98834 8L4.69534 5.707C4.50784 5.51949 4.40249 5.26518 4.40249 5C4.40249 4.73482 4.50784 4.48051 4.69534 4.293C4.88285 4.10549 5.13717 4.00015 5.40234 4.00015C5.66752 4.00015 5.92184 4.10549 6.10934 4.293L8.40234 6.586L10.6953 4.293C10.8829 4.10549 11.1372 4.00015 11.4023 4.00015C11.6675 4.00015 11.9218 4.10549 12.1093 4.293C12.2969 4.48051 12.4022 4.73482 12.4022 5C12.4022 5.26518 12.2969 5.51949 12.1093 5.707L9.81634 8L12.1093 10.293Z"
        fill="#001375"
      />
    </svg>
  );
};

export default Svg;
