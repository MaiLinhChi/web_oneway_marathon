import React, { useCallback, useEffect, useState } from 'react';

import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';

import { TTournamentRegisterProps } from './TournamentRegister.types.d';
import './TournamentRegister.scss';
import { Paths } from '@/pages/routers';
import numeral from 'numeral';
import { EKeyTabTournamentRegisterPage } from '@/pages/TournamentRegisterPage/TournamentRegisterPage.enums';
import Modal from '@/components/Modal';
import moment from 'moment';
import { currentDateTime } from '@/components/Countdown/Countdown';

const TournamentRegister: React.FC<TTournamentRegisterProps> = ({
  color,
  multiple,
  data,
  registerGroup,
  id,
  _id,
  date,
  unitRace,
}) => {
  // const handleIsEnd = useCallback((): void => {
  //   setIsEnd(unixValue - currentValue > 0 ? false : true);
  // }, [date]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     handleIsEnd();
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, [handleIsEnd, isEnd]);
  return (
    <div className="TournamentRegister" id={id}>
      <div className="container">
        <div className="TournamentRegister-wrapper">
          <h2 className="TournamentRegister-title">
            Đăng Ký
            <span style={{ color }}>{multiple ? 'nhóm' : 'cá nhân'}</span>
          </h2>
          {multiple ? (
            <div className="TournamentRegister-table multiple">
              <table>
                <thead>
                  <tr>
                    {registerGroup.map((item: any, index: any) => (
                      <th key={index}>
                        <div className="TournamentRegister-table-description">
                          Nhóm từ {item.numberPerson.from}-{item.numberPerson.to} người
                        </div>
                        <div className="TournamentRegister-table-title">
                          giảm <span>{item.percent}%</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          ) : (
            <div className="TournamentRegister-table single">
              <table>
                <thead>
                  <tr>
                    <th />
                    {data?.map((item: any, index: any) => (
                      <th key={index}>
                        <div className="TournamentRegister-table-title">{item.name}</div>
                        <div className="TournamentRegister-table-description">Áp dụng trước ngày {item.endSell}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item: any, index: any) => (
                    <tr key={index}>
                      <td>
                        {item?.individual[index].distance}
                        {unitRace}
                      </td>
                      {item?.individual?.map((i: any, key: any) => (
                        <td key={key}>{numeral(i.price).format()} VND</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="TournamentRegister-btn">
            <Button
              size="large"
              title="Đăng ký ngay"
              titleColor={EIconColor.WHITE}
              borderColor={color}
              backgroundColor={color}
              link={Paths.TournamentRegister(
                `${_id}?tab=${
                  multiple ? EKeyTabTournamentRegisterPage.MULTIPLE : EKeyTabTournamentRegisterPage.SINGLE
                }`,
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegister;
