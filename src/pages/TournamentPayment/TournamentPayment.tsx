import React from 'react';

import TournamentRegisterPage from '@/pages/TournamentRegisterPage/TournamentRegisterPage';

import './TournamentPayment.scss';

const TournamentPayment: React.FC = () => {
  return (
    <div className="TournamentPayment">
      <TournamentRegisterPage payment />
    </div>
  );
};

export default TournamentPayment;
