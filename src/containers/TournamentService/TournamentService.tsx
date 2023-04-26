import React from 'react';

import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';

import { TTournamentServiceProps } from './TournamentService.types.d';
import './TournamentService.scss';

const TournamentService: React.FC<TTournamentServiceProps> = ({ color, buttonProps, data, id }) => {
  return (
    <div className="TournamentService" id={id}>
      <div className="container">
        <div className="TournamentService-wrapper">
          <h2 className="TournamentService-title">
            Dịch vụ
            <span style={{ color }}>liên quan</span>
          </h2>
          <div className="TournamentService-main flex justify-between">
            <div className="TournamentService-main-item">
              <p className="TournamentService-main-description">{data.description}</p>
              {buttonProps && (
                <div className="TournamentService-main-btn">
                  <Button {...buttonProps} borderColor={color} backgroundColor={color} titleColor={EIconColor.WHITE} />
                </div>
              )}
            </div>
            <div className="TournamentService-main-item">
              <div className="TournamentService-main-image">
                <img src={data.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentService;
