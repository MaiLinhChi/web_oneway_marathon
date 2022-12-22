import React from 'react';

import ImageTournamentService from '@/assets/images/image-tournament-service.png';
import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';

import { TTournamentServiceProps } from './TournamentService.types.d';
import './TournamentService.scss';

const TournamentService: React.FC<TTournamentServiceProps> = ({ color, buttonProps }) => {
  return (
    <div className="TournamentService">
      <div className="container">
        <div className="TournamentService-wrapper">
          <h2 className="TournamentService-title">
            Dịch vụ
            <span style={{ color }}>liên quan</span>
          </h2>
          <div className="TournamentService-main flex">
            <div className="TournamentService-main-item">
              <p className="TournamentService-main-description">
                Sports Backers is a nationally recognized nonprofit, committed to making all corners of our community
                more active. We achieve our mission by advocating for safe places to bike and walk, supporting youth
                running, celebrating triumphs at our events, and inspiring folks to live actively!
              </p>
              {buttonProps && (
                <div className="TournamentService-main-btn">
                  <Button {...buttonProps} borderColor={color} backgroundColor={color} titleColor={EIconColor.WHITE} />
                </div>
              )}
            </div>
            <div className="TournamentService-main-item">
              <div className="TournamentService-main-image">
                <img src={ImageTournamentService} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentService;
