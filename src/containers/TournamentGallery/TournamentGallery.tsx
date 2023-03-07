import React from 'react';

import ImageTournamentGallery1 from '@/assets/images/image-tournament-gallery-1.png';
import ImageTournamentGallery2 from '@/assets/images/image-tournament-gallery-2.png';
import ImageTournamentGallery3 from '@/assets/images/image-tournament-gallery-3.png';
import ImageTournamentGallery4 from '@/assets/images/image-tournament-gallery-4.png';
import ImageTournamentGallery5 from '@/assets/images/image-tournament-gallery-5.png';

import { TTournamentGalleryProps } from './TournamentGallery.types.d';
import './TournamentGallery.scss';

const TournamentGallery: React.FC<TTournamentGalleryProps> = ({ color }) => {
  return (
    <div className="TournamentGallery">
      <div className="container">
        <div className="TournamentGallery-wrapper">
          <h2 className="TournamentGallery-title">
            Thư viện <span style={{ color }}>ảnh</span>
          </h2>
          <div className="TournamentGallery-gallery">
            <div className="TournamentGallery-gallery-item">
              <img src={ImageTournamentGallery1} alt="" />
            </div>
            <div className="TournamentGallery-gallery-item">
              <img src={ImageTournamentGallery2} alt="" />
            </div>
            <div className="TournamentGallery-gallery-item">
              <img src={ImageTournamentGallery3} alt="" />
            </div>
            <div className="TournamentGallery-gallery-item">
              <img src={ImageTournamentGallery4} alt="" />
            </div>
            <div className="TournamentGallery-gallery-item">
              <img src={ImageTournamentGallery5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentGallery;
