import React, { useEffect } from 'react';
import { Link, navigate, useLocation } from '@reach/router';

import ImageHomeBanner1 from '@/assets/images/image-home-banner-1.png';
import ImageTournamentMap2 from '@/assets/images/image-tournament-map-2.png';
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
import { Paths } from '../routers';

const OneWayMarathonDetail: any = ({ location }: any) => {
  const data = location.state;
  if (!data) {
    navigate(Paths.Home);
  }
  return (
    <div className="OneWayMarathonVungTau">
      <TournamentOverview
        date="2023/12/01 00:00:00"
        title={data?.name}
        background={ImageHomeBanner1}
        color={EIconColor.PERSIAN_GREEN}
        dataNav={[
          { title: 'Giới thiệu', link: '#gioithieu' },
          { title: 'Đăng ký', link: '#' },
          { title: 'Cung đường', link: '#' },
          { title: 'Giải thưởng', link: '#' },
          { title: 'RACEKIT', link: '#' },
          { title: 'Dịch vụ liên quan', link: '#' },
          { title: 'Đối tác', link: '#' },
          { title: 'Lịch trình sự kiện', link: '#' },
          { title: 'Quy định và thể lệ ', link: '#' },
        ]}
        id={{ title: 'Giới thiệu', link: '#gioithieu' }}
        stepKilometer={data?.race}
        description={data?.description}
        dateTournament={data?.startTime}
        locationTournament={data?.location}
        typeTournament={data?.type}
      />

      <div className="OneWayMarathonVungTau-wrapper">
        <TournamentRegister color={EIconColor.PERSIAN_GREEN} data={data?.race} />

        <TournamentRegister
          color={EIconColor.PERSIAN_GREEN}
          multiple
          data={data?.race}
          registerGroup={data?.registerGroup}
        />

        <TournamentMap color={EIconColor.PERSIAN_GREEN} data={data} stepKilometer={[]} />

        <TournamentReward color={EIconColor.PERSIAN_GREEN} title="OneWay Vũng Tàu" />

        <TournamentRacekit
          color={EIconColor.PERSIAN_GREEN}
          colors={[
            'radial-gradient(#008C6E, #008C6E)',
            'linear-gradient(to right, #00AF89, #00AF89)',
            'radial-gradient(#008C6E, #008C6E)',
            'linear-gradient(to right, #00AF89, #00AF89)',
          ]}
          data={data?.raceKit}
        />

        <TournamentService color={EIconColor.PERSIAN_GREEN} buttonProps={{ title: 'Đặt combo' }} data={data?.service} />

        <TournamentPartner title="OneWay Vũng Tàu" color={EIconColor.PERSIAN_GREEN} />

        <TournamentEvent color={EIconColor.PERSIAN_GREEN} data={data?.schedule} />

        <TournamentRule color={EIconColor.PERSIAN_GREEN} data={data?.regulation} />
      </div>
    </div>
  );
};

export default OneWayMarathonDetail;
