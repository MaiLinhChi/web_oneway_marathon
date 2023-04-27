import { useCallback, useEffect, useState } from 'react';
import { useParams } from '@reach/router';

import ImageHomeBanner1 from '@/assets/images/image-home-banner-1.png';
import { EIconColor } from '@/components/Icon';
import TournamentOverview from '@/containers/TournamentOverview';
import TournamentMap from '@/containers/TournamentMap';
import TournamentReward from '@/containers/TournamentReward';
import TournamentRacekit from '@/containers/TournamentRacekit';
import TournamentService from '@/containers/TournamentService';
import TournamentPartner from '@/containers/TournamentPartner';
import TournamentRegister from '@/containers/TournamentRegister';
import TournamentRule from '@/containers/TournamentRule';
import TournamentEvent from '@/containers/TournamentEvent';

import './OneWayMarathonDetail.scss';
import { useDispatch } from 'react-redux';
import { getMarathonByIdAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { showNotification } from '@/utils/functions';

const OneWayMarathonDetail: any = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>({});
  const dispatch = useDispatch();
  const getMarathonDetail = useCallback(() => {
    if (!id) return;
    dispatch(getMarathonByIdAction.request(id, (response): void => handlerGetMarathonDetailSuccess(response)));
  }, [dispatch, id]);
  const handlerGetMarathonDetailSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      // showNotification(ETypeNotification.SUCCESS, response.message);s
      setData(response.data);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  useEffect(() => {
    getMarathonDetail();
  }, [id, getMarathonDetail]);
  if (Object.keys(data).length === 0) return null;
  return (
    <div className="OneWayMarathonVungTau">
      <TournamentOverview
        date="2023/12/01 00:00:00"
        title={data?.name}
        background={ImageHomeBanner1}
        color={EIconColor.PERSIAN_GREEN}
        dataNav={[
          { title: 'Giới thiệu', link: '#introduction' },
          { title: 'Đăng ký', link: '#register' },
          { title: 'Cung đường', link: '#map' },
          { title: 'Giải thưởng', link: '#reward' },
          { title: 'RACEKIT', link: '#racekit' },
          { title: 'Dịch vụ liên quan', link: '#service' },
          { title: 'Đối tác', link: '#partner' },
          { title: 'Lịch trình sự kiện', link: '#schedule' },
          { title: 'Quy định và thể lệ ', link: '#regulation' },
        ]}
        id="gioithieu"
        stepKilometer={data?.race}
        description={data?.description}
        dateTournament={data?.startTime}
        locationTournament={data?.location}
        typeTournament={data?.type}
      />
      <div className="OneWayMarathonVungTau-wrapper">
        <TournamentRegister color={EIconColor.PERSIAN_GREEN} data={data} id="register" />

        <TournamentRegister color={EIconColor.PERSIAN_GREEN} multiple data={data} registerGroup={data?.registerGroup} />

        <TournamentMap color={EIconColor.PERSIAN_GREEN} data={data} id="map" />

        <TournamentReward color={EIconColor.PERSIAN_GREEN} title="OneWay Vũng Tàu" id="reward" />

        <TournamentRacekit
          color={EIconColor.PERSIAN_GREEN}
          colors={[
            'radial-gradient(#008C6E, #008C6E)',
            'linear-gradient(to right, #00AF89, #00AF89)',
            'radial-gradient(#008C6E, #008C6E)',
            'linear-gradient(to right, #00AF89, #00AF89)',
          ]}
          data={data?.raceKit}
          id="racekit"
        />

        <TournamentService
          color={EIconColor.PERSIAN_GREEN}
          buttonProps={{ title: 'Đặt combo' }}
          data={data?.service}
          id="service"
        />

        <TournamentPartner title="OneWay Vũng Tàu" color={EIconColor.PERSIAN_GREEN} id="partner" />

        <TournamentEvent color={EIconColor.PERSIAN_GREEN} data={data?.schedule} id="schedule" />

        <TournamentRule color={EIconColor.PERSIAN_GREEN} data={data?.regulation} id="regulation" />
      </div>
    </div>
  );
};

export default OneWayMarathonDetail;
