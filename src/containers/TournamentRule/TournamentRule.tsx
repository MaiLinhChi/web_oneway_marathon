import React from 'react';

import { TTournamentRuleProps } from './TournamentRule.types.d';
import './TournamentRule.scss';

const TournamentRule: React.FC<TTournamentRuleProps> = ({ color, data, id }) => {
  return (
    <div className="TournamentRule" id={id}>
      <div className="container">
        <div className="TournamentRule-wrapper">
          <h2 className="TournamentRule-title">
            Quy Định và <span style={{ color }}>thể lệ</span>
          </h2>
          {data.map((item: any, index: any) => (
            <div className="TournamentRule-main" key={index}>
              <h4>{item.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: item?.description }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentRule;
