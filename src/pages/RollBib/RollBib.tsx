import React, { useCallback, useEffect, useState } from 'react';

import BgRollBib from '@/assets/images/bg-roll-bib.png';
import RollBibCardRollSuccess from '@/pages/RollBib/RollBibCardRollSuccess';
import { EIconColor } from '@/components/Icon';
import RollBibWheel from '@/pages/RollBib/RollBibWheel';

import { EKeyStepRollBib } from './RollBib.enums';
import './RollBib.scss';
import { navigate, useParams } from '@reach/router';
import { useDispatch } from 'react-redux';
import { getTicketDetailAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { showNotification } from '@/utils/functions';
import { Paths } from '../routers';

const RollBib: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState<any>({});
  // const [stepRoll, setStepRoll] = useState<{ key: EKeyStepRollBib; bib?: any }>({
  //   key: EKeyStepRollBib.ROLL,
  // });
  const getOrderDetail = useCallback(() => {
    if (id) dispatch(getTicketDetailAction.request({ id }, (response): void => handlerGetOrderDetailSuccess(response)));
  }, [dispatch, id]);
  const handlerGetOrderDetailSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Lấy chi tiết đơn hàng thành công !');
      setData(response.data);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
      navigate(Paths.Home);
    }
  };
  useEffect(() => {
    getOrderDetail();
  }, [getOrderDetail]);
  return (
    <div className="RollBib">
      <div className="RollBib-background">
        <img src={BgRollBib} alt="" />
      </div>
      <div className="container">
        <div className="RollBib-wrapper">
          {!data.bib && <RollBibWheel color={EIconColor.BLUE_RIBBON} onNext={getOrderDetail} data={data} />}
          {data.bib && <RollBibCardRollSuccess color={EIconColor.BLUE_RIBBON} data={data} />}
        </div>
      </div>
    </div>
  );
};

export default RollBib;
