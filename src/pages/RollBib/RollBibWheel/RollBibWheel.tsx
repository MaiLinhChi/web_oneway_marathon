import React, { useState } from 'react';

import { EIconColor } from '@/components/Icon';
import Button from '@/components/Button';

import { DEFAULT_BIB_NUMBER } from './RollBibWheel.data';
import { TRollBibWheelProps } from './RollBibWheel.types';
import './RollBibWheel.scss';

const RollBibWheel: React.FC<TRollBibWheelProps> = ({ color, onNext }) => {
  const [randomNumber, setRandomNumber] = useState<string>(DEFAULT_BIB_NUMBER);
  const [isRolled, setIsRolled] = useState<boolean>(false);

  const handleClickRoll = (): void => {
    if (!isRolled) setIsRolled(true);
    const arrayNumbers = [];
    for (let i = 0; i < DEFAULT_BIB_NUMBER.length; i++) {
      arrayNumbers.push(Math.floor(Math.random() * 9));
    }
    setRandomNumber(String(arrayNumbers.join('')));
  };

  return (
    <div className="RollBibWheel">
      <div className="RollBibWheel-name">{`{Tên trên BIB}`}</div>
      <div className="RollBibWheel-wheel" style={{ textShadow: `12px 12px 0px ${color}` }}>
        {randomNumber}
      </div>
      <div className="RollBibWheel-actions flex justify-center">
        {isRolled ? (
          <>
            <Button
              title="Quay lại"
              size="large"
              titleColor={color}
              backgroundColor={EIconColor.WHITE}
              borderColor={EIconColor.WHITE}
              onClick={handleClickRoll}
            />
            <Button
              title="Xác nhận số BIB"
              size="large"
              titleColor={EIconColor.WHITE}
              backgroundColor={EIconColor.ELECTRIC_VIOLET}
              borderColor={EIconColor.ELECTRIC_VIOLET}
              onClick={(): void => onNext?.({ number: randomNumber })}
            />
          </>
        ) : (
          <>
            <Button
              title="Quay BIB ngay"
              size="large"
              titleColor={EIconColor.WHITE}
              backgroundColor={color}
              borderColor={color}
              onClick={handleClickRoll}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default RollBibWheel;
