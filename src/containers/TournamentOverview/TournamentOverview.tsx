import React, { useState } from 'react';

import Button from '@/components/Button';
import Countdown from '@/components/Countdown';
import { Paths } from '@/pages/routers';
import { useLocation } from '@reach/router';
import { EKeyTabTournamentRegisterPage } from '@/pages/TournamentRegisterPage/TournamentRegisterPage.enums';

import { TTournamentOverviewProps } from './TournamentOverview.types.d';
import './TournamentOverview.scss';

const TournamentOverview: React.FC<TTournamentOverviewProps> = ({
  dataNav = [],
  color,
  background,
  title,
  stepKilometer = [],
  description,
  dateTournament,
  locationTournament,
  typeTournament,
  date,
  unitRace,
  id,
  _id,
}) => {
  const [isExpired, setIsExpired] = useState<boolean>();
  console.log(isExpired);
  const navigation = useLocation();
  return (
    <div className="TournamentOverview">
      <nav className="TournamentOverview-nav" style={{ background: color }}>
        <ul className="TournamentOverview-nav-list flex items-center justify-center">
          {dataNav.map((item, index) => (
            <li className="TournamentOverview-nav-list-item" key={index}>
              <a href={navigation.pathname + item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="TournamentOverview-banner" id={id}>
        <div className="TournamentOverview-banner-background">
          <img src={background} alt="" />
        </div>
        <div className="TournamentOverview-banner-wrapper flex items-center justify-center flex-col text-center">
          <h1 className="TournamentOverview-banner-title" style={{ textShadow: `.8rem .8rem 0 ${color}` }}>
            OneWay Marathon
            <br />
            <span style={{ textShadow: `.8rem .8rem 0 ${color}` }}>{title}</span>
          </h1>
          {typeof isExpired === 'boolean' && isExpired && (
            <div className="TournamentOverview-banner-countdown">
              <strong>Đã kết thúc</strong>
            </div>
          )}
          {!isExpired && (
            <Countdown
              dateTo={date}
              onFinish={(isEnd): void => setIsExpired(isEnd)}
              render={({ years, months, days, hours, minutes }): React.ReactNode => {
                const arrMap = [
                  { label: 'năm', value: years, hideInZero: true },
                  { label: 'tháng', value: months, hideInZero: true },
                  { label: 'ngày', value: days, hideInZero: true },
                  { label: 'giờ', value: hours },
                  { label: 'phút', value: minutes },
                ];
                return (
                  <div className="TournamentOverview-banner-countdown flex items-center">
                    {arrMap.map((item, index) => {
                      const isHide = item.hideInZero && item.value === 0;
                      const showValue = item.value < 10 ? `0${item.value}` : item.value;

                      return isHide ? null : (
                        <div key={index}>
                          <strong>
                            <span style={{ color }}>{showValue}</span>
                          </strong>
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            />
          )}

          {typeof isExpired === 'boolean' && !isExpired && (
            <div className="TournamentOverview-banner-btns flex items-center justify-center">
              <Button
                title="Đăng ký nhóm"
                titleColor={color}
                link={`${Paths.TournamentRegister(_id)}?tab=${EKeyTabTournamentRegisterPage.MULTIPLE}`}
              />
              <Button
                title="Đăng ký cá nhân"
                link={`${Paths.TournamentRegister(_id)}?tab=${EKeyTabTournamentRegisterPage.SINGLE}`}
              />
            </div>
          )}
        </div>
      </div>
      <div className="TournamentOverview-step-kilometer flex items-center justify-center">
        {stepKilometer.map((item: any, index) => (
          <div key={index} className="TournamentOverview-step-kilometer-item">
            {item.distance}
            <span>{unitRace}</span>
          </div>
        ))}
      </div>
      <div className="TournamentOverview-info" style={{ background: color }}>
        <div className="container">
          <p className="TournamentOverview-info-description">{description}</p>
          <div className="TournamentOverview-info-detail flex items-center justify-around">
            <div className="TournamentOverview-info-detail-item">
              <strong>Ngày đua:</strong> <span>{dateTournament}</span>
            </div>
            <div className="TournamentOverview-info-detail-item">
              Địa điểm: <span>{locationTournament}</span>
            </div>
            <div className="TournamentOverview-info-detail-item">
              Loại hình: <span>{typeTournament}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentOverview;
