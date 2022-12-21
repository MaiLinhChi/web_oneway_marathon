import React from 'react';

import { Col, Row } from 'antd';
import IconReward from '@/assets/icons/icon-reward.svg';

import { TAchievementsProps } from './Achievements.types';
import './Achievements.scss';

const Achievements: React.FC<TAchievementsProps> = () => {
  return (
    <div className="Achievements">
      <div className="Achievements-group">
        <div className="Achievements-group-title">OneWaY CÁT BÀ 2022</div>
        <div className="Achievements-group-list">
          {[1, 2].map((item) => (
            <div key={item} className="Achievements-group-list-item flex items-center">
              <div className="Achievements-group-list-item-icon">
                <img src={IconReward} alt="" />
              </div>
              <div className="Achievements-group-list-item-info">
                <div className="Achievements-group-list-item-info-title">
                  Finisher half-marathon • Oneway Marathon Cát Bà 2022
                </div>
                <div className="Achievements-group-list-item-info-description">1:19:01 - 1/1/2022</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="Achievements-group">
        <div className="Achievements-group-title">OneWaY Vũng Tàu 2023</div>
        <div className="Achievements-group-list">
          {[1, 2].map((item) => (
            <div key={item} className="Achievements-group-list-item flex items-center">
              <div className="Achievements-group-list-item-icon">
                <img src={IconReward} alt="" />
              </div>
              <div className="Achievements-group-list-item-info">
                <div className="Achievements-group-list-item-info-title">
                  Finisher half-marathon • Oneway Marathon Cát Bà 2022
                </div>
                <div className="Achievements-group-list-item-info-description">1:19:01 - 1/1/2022</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
