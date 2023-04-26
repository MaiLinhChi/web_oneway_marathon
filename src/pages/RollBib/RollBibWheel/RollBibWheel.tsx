import React, { useState } from 'react';

import { EIconColor } from '@/components/Icon';
import Button from '@/components/Button';

import { DEFAULT_BIB_NUMBER } from './RollBibWheel.data';
import { TRollBibWheelProps } from './RollBibWheel.types';
import './RollBibWheel.scss';
import { useDispatch } from 'react-redux';
import AuthHelpers from '@/services/helpers';
import { OrderEditAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { showNotification } from '@/utils/functions';

const RollBibWheel: React.FC<TRollBibWheelProps> = ({ color, data, onNext }) => {
  const [randomNumber, setRandomNumber] = useState<string>(DEFAULT_BIB_NUMBER);
  const [isRolled, setIsRolled] = useState<boolean>(false);
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();

  const handleClickRoll = (): void => {
    if (!isRolled) setIsRolled(true);
    const arrayNumbers = [Math.floor(data.distance / 1000)];
    for (let i = 0; i < DEFAULT_BIB_NUMBER.length; i++) {
      arrayNumbers.push(Math.floor(Math.random() * 9));
    }
    setRandomNumber(String(arrayNumbers.join('')));
  };

  const handleConfirmBib = async (): Promise<void> => {
    if (data?._id) {
      const id = data._id;
      const body = { bib: randomNumber };
      const headers = {
        params: {
          authorization: `Bearer ${atk}`,
        },
        id,
      };
      dispatch(
        OrderEditAction.request({ body, headers }, (response): void => handlerGetPaymentMethodSuccess(response)),
      );
    }
  };

  const handlerGetPaymentMethodSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Roll bib successfully');
      onNext?.();
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };

  return (
    <div className="RollBibWheel">
      <div className="RollBibWheel-name">{data.nameBib}</div>
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
              onClick={handleConfirmBib}
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
