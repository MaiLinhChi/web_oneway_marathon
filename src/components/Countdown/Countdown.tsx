import React, { useEffect, useState } from 'react';
import moment, { Duration } from 'moment';

import { TCountdownProps } from './Countdown.types.d';
import './Countdown.scss';

const currentDateTime = {
  year: moment().year(),
  month: moment().month(),
  date: moment().date(),
  hour: moment().hours(),
  minute: moment().minutes(),
  second: moment().seconds(),
};

const Countdown: React.FC<TCountdownProps> = ({ dateTo, dateFrom, render, onFinish }) => {
  const [diffTime, setDiffTime] = useState<number>();
  const [duration, setDuration] = useState<Duration | undefined>();
  const [isFirstFetching, setIsFirstFetching] = useState<boolean>(true);
  useEffect(() => {
    if (dateTo) {
      const unixValue = moment(dateTo, 'YYYY/MM/DD HH:mm:ss').unix();
      const currentValue = moment(dateFrom || currentDateTime, dateFrom ? 'YYYY/MM/DD HH:mm:ss' : undefined).unix();
      setDiffTime(unixValue - currentValue);
      console.log(unixValue, currentValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFrom, dateTo]);

  useEffect(() => {
    if (typeof diffTime === 'number') {
      let durationData: any = moment.duration(diffTime * 1000, 'milliseconds');

      const interval = setInterval(() => {
        durationData = moment.duration(durationData - 1000, 'milliseconds');
        setDuration(durationData);

        const isCountEnd =
          durationData?.years() <= 0 &&
          durationData?.months() <= 0 &&
          durationData?.days() <= 0 &&
          durationData?.hours() <= 0 &&
          durationData?.minutes() <= 0 &&
          durationData?.seconds() <= 0;

        if (isCountEnd) {
          onFinish?.();
          clearInterval(interval);
        }

        if (isFirstFetching) {
          onFinish?.(false);
          setIsFirstFetching(false);
        }
      }, 1000);

      return (): void => {
        clearInterval(interval);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diffTime]);

  return (
    <div className="Countdown">
      {duration &&
        render?.({
          years: duration.years(),
          months: duration.months(),
          days: duration.days(),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        })}
    </div>
  );
};

export default Countdown;
