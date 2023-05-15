import React, { useState } from 'react';

import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';

import { TTournamentRegisterProps } from './TournamentRegister.types.d';
import './TournamentRegister.scss';
import { Paths } from '@/pages/routers';
import numeral from 'numeral';
import { EKeyTabTournamentRegisterPage } from '@/pages/TournamentRegisterPage/TournamentRegisterPage.enums';
import Modal from '@/components/Modal';

const TournamentRegister: React.FC<TTournamentRegisterProps> = ({ color, multiple, data, registerGroup, id }) => {
  const [open, setOpen] = useState(false);
  if (Object.keys(data).length === 0) return null;
  const longest = (arr: any): [] => {
    if (arr?.length === 0) {
      return [];
    }
    const newArr = arr.reduce(function (a: any, b: any) {
      return a.price.length > b.price.length ? a : b;
    });
    return newArr.price;
  };
  const handleModel = (): void => {
    setOpen(true);
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
                    {longest(data?.race)?.map((item: any, index) => (
                      <th key={index}>
                        <div className="TournamentRegister-table-title">{item.name}</div>
                        <div className="TournamentRegister-table-description">Áp dụng trước ngày {item.startSell}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.race?.map((item: any, index: any) => (
                    <tr key={index}>
                      <td>
                        {item.distance}
                        {item.unit}
                      </td>
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
            {multiple ? (
              <Button
                size="large"
                title="Đăng ký ngay"
                titleColor={EIconColor.WHITE}
                borderColor={color}
                backgroundColor={color}
                onClick={handleModel}
              />
            ) : (
              <Button
                size="large"
                title="Đăng ký ngay"
                titleColor={EIconColor.WHITE}
                borderColor={color}
                backgroundColor={color}
                link={Paths.TournamentRegister(
                  `${data._id}?tab=${
                    multiple ? EKeyTabTournamentRegisterPage.MULTIPLE : EKeyTabTournamentRegisterPage.SINGLE
                  }`,
                )}
              />
            )}
          </div>
        </div>
      </div>
      <Modal visible={open} onClose={(): void => setOpen(false)}>
        <h1>Vui lòng liên hệ sale</h1>
        <ul>
          <li>Email: sale@gmail.com</li>
          <li>Phone: 058555857857</li>
        </ul>
      </Modal>
    </div>
  );
};

export default TournamentRegister;
