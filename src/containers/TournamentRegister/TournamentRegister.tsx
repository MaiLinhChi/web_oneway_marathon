import React, { useEffect, useState } from 'react';

import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';

import { TTournamentRegisterProps } from './TournamentRegister.types.d';
import './TournamentRegister.scss';
import { Paths } from '@/pages/routers';
import numeral from 'numeral';

const TournamentRegister: React.FC<TTournamentRegisterProps> = ({ color, multiple, data, registerGroup, id }) => {
  const longest = (arr: any): [] => {
    if (arr?.length === 0) {
      return [];
    }
    const newArr = arr.reduce(function (a: any, b: any) {
      return a.price.length > b.price.length ? a : b;
    });
    return newArr.price;
  };
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
                    {longest(data.race)?.map((item: any, index) => (
                      <th key={index}>
                        <div className="TournamentRegister-table-title">{item.name}</div>
                        <div className="TournamentRegister-table-description">Áp dụng trước ngày {item.startSell}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.race?.map((item: any, index: any) => (
                    <tr key={index}>
                      <td>{item.distance} M</td>
                      {item?.price?.map((price: any, key: any) => (
                        <td key={key}>{numeral(price.individual).format()} VND</td>
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
              link={Paths.TournamentRegister(data._id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegister;
