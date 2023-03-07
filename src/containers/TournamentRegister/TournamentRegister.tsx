import React from 'react';

import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';

import { TTournamentRegisterProps } from './TournamentRegister.types.d';
import './TournamentRegister.scss';

const TournamentRegister: React.FC<TTournamentRegisterProps> = ({ color, multiple }) => {
  return (
    <div className="TournamentRegister">
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
                    <th>
                      <div className="TournamentRegister-table-description">Nhóm từ 10-29 người</div>
                      <div className="TournamentRegister-table-title">
                        giảm <span>5%</span>
                      </div>
                    </th>
                    <th>
                      <div className="TournamentRegister-table-description">Nhóm từ 30-49 người</div>
                      <div className="TournamentRegister-table-title">
                        giảm <span>8%</span>
                      </div>
                    </th>
                    <th>
                      <div className="TournamentRegister-table-description">Nhóm từ 50-99 người</div>
                      <div className="TournamentRegister-table-title">
                        giảm <span>10%</span>
                      </div>
                    </th>
                    <th>
                      <div className="TournamentRegister-table-description">Nhóm từ 100-199 người</div>
                      <div className="TournamentRegister-table-title">
                        giảm <span>20%</span>
                      </div>
                    </th>
                    <th>
                      <div className="TournamentRegister-table-description">Nhóm từ 200 người</div>
                      <div className="TournamentRegister-table-title">
                        giảm <span>25%</span>
                      </div>
                    </th>
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
                    <th>
                      <div className="TournamentRegister-table-title">Super Early Bird</div>
                      <div className="TournamentRegister-table-description">Áp dụng trước ngày 10/2/2023</div>
                    </th>
                    <th>
                      <div className="TournamentRegister-table-title">Early Bird</div>
                      <div className="TournamentRegister-table-description">Áp dụng trước ngày 10/2/2023</div>
                    </th>
                    <th>
                      <div className="TournamentRegister-table-title">Regular</div>
                      <div className="TournamentRegister-table-description">Áp dụng trước ngày 10/2/2023</div>
                    </th>
                    <th>
                      <div className="TournamentRegister-table-title">Late (Front Door)</div>
                      <div className="TournamentRegister-table-description">Áp dụng trước ngày 10/2/2023</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {['42', '21', '10', '5'].map((item) => (
                    <tr>
                      <td>{item} KM</td>
                      <td>250.000 VND</td>
                      <td>250.000 VND</td>
                      <td>250.000 VND</td>
                      <td>250.000 VND</td>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegister;
