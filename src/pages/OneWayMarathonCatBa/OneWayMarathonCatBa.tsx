import React, { useCallback, useEffect, useState } from 'react';

import ImageHomeBanner2 from '@/assets/images/image-home-banner-2.png';
import ImageTournamentMap1 from '@/assets/images/image-tournament-map-1.png';
import { EIconColor } from '@/components/Icon';
import TournamentOverview from '@/containers/TournamentOverview';
import TournamentMap from '@/containers/TournamentMap';
import TournamentReward from '@/containers/TournamentReward';
import TournamentRacekit from '@/containers/TournamentRacekit';
import TournamentService from '@/containers/TournamentService';
import TournamentPartner from '@/containers/TournamentPartner';
import TournamentGallery from '@/containers/TournamentGallery';
import TournamentAchievements from '@/containers/TournamentAchievements';

import './OneWayMarathonCatBa.scss';
import { navigate, useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { detailRaceAction } from '@/redux/actions';
import { showNotification } from '@/utils/functions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { Paths } from '@/pages/routers';
import { TRootState } from '@/redux/reducers';

const OneWayMarathonCatBa: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const raceDetailState = useSelector((state: TRootState) => state.raceReducer.detailRaceResponse)?.data;
  const getRaceBySlug = useCallback(() => {
    if (id)
      dispatch(detailRaceAction.request({ paths: { id } }, (response): void => handlerGetRaceBySlugSuccess(response)));
  }, [dispatch, id]);
  const handlerGetRaceBySlugSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Lấy chi tiết giải thành công !');
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
      navigate(Paths.Home);
    }
  };
  useEffect(() => {
    getRaceBySlug();
  }, [getRaceBySlug]);
  return (
    <div className="OneWayMarathonCatBa">
      <TournamentOverview
        date="2022/12/01 00:00:00"
        expired
        title={raceDetailState?.race.name}
        background={ImageHomeBanner2}
        color={EIconColor.BLUE_RIBBON}
        dataNav={[
          { title: 'Thông tin giải', link: '#' },
          { title: 'Giá vé', link: '#' },
          { title: 'Cung đường', link: '#' },
          { title: 'Giải thưởng', link: '#' },
          { title: 'RACEKIT', link: '#' },
          { title: 'Dịch vụ liên quan', link: '#' },
          { title: 'Thành tích', link: '#' },
          { title: 'Thư viện ảnh', link: '#' },
          { title: 'Đối tác ', link: '#' },
        ]}
        stepKilometer={[
          { label: '5', value: '5' },
          { label: '10', value: '10' },
          { label: '21', value: '21' },
          { label: '42', value: '42' },
        ]}
        description={raceDetailState?.race.description}
        dateTournament={raceDetailState?.race.start}
        locationTournament="Cát Bà-Hải Phòng"
        typeTournament="Road/City trail"
      />
      <div className="OneWayMarathonCatBa-wrapper">
        <TournamentMap
          color={EIconColor.BLUE_RIBBON}
          title="OneWay Cát Bà"
          stepKilometer={raceDetailState?.race.tickets}
        />

        <TournamentReward color={EIconColor.BLUE_RIBBON} title="OneWay Cát Bà" />

        <TournamentRacekit
          color={EIconColor.BLUE_RIBBON}
          colors={[
            'radial-gradient(#0E1E7E, #050D41)',
            'linear-gradient(to right, #58AAFB, #6BC2FD)',
            'radial-gradient(#0E1E7E, #050D41)',
            'linear-gradient(to right, #58AAFB, #6BC2FD)',
          ]}
        />

        <TournamentService color={EIconColor.BLUE_RIBBON} />

        <TournamentAchievements title="OneWay Cát Bà" color={EIconColor.BLUE_RIBBON} />

        <TournamentGallery color={EIconColor.BLUE_RIBBON} />

        <TournamentPartner title="OneWay Cát Bà" color={EIconColor.BLUE_RIBBON} />
      </div>
    </div>
  );
};

export default OneWayMarathonCatBa;
