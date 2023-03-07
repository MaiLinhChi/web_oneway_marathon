import React, { useEffect, useState } from 'react';
import moment, { Duration } from 'moment';

import { TCountdownTimeProps } from '@/components/CountdownTime/CountdownTime.types';

const CountdownTime: React.FC<TCountdownTimeProps> = ({ defaultValue = '00:00', format = 'mm:ss', onFinish }) => {
  const [value, setValue] = useState<Duration | undefined>();

  const showValue = (): string => {
    const minutes = Number(value?.minutes?.()) < 10 ? `0${value?.minutes()}` : value?.minutes();
    const seconds = Number(value?.seconds?.()) < 10 ? `0${value?.seconds()}` : value?.seconds();

    return value ? `${minutes}:${seconds}` : defaultValue;
  };

  useEffect(() => {
    const unixValue = moment(defaultValue, format).unix();
    const currentValue = moment('00:00', format).unix();
    const diffTime = unixValue - currentValue;
    let duration: any = moment.duration(diffTime * 1000, 'milliseconds');

    const interval = setInterval(() => {
      duration = moment.duration(duration - 1000, 'milliseconds');
      setValue(duration);

      const isCountEnd = duration?.minutes() === 0 && duration?.seconds() === 0;

      if (isCountEnd) {
        onFinish?.();
        clearInterval(interval);
      }
    }, 1000);

    return (): void => {
      clearInterval(interval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return <>{showValue()}</>;
};

export default CountdownTime;
