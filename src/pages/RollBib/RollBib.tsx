import React, { useState } from 'react';

import BgRollBib from '@/assets/images/bg-roll-bib.png';
import RollBibCardRollSuccess from '@/pages/RollBib/RollBibCardRollSuccess';
import { EIconColor } from '@/components/Icon';
import RollBibWheel from '@/pages/RollBib/RollBibWheel';

import { EKeyStepRollBib } from './RollBib.enums';
import './RollBib.scss';

const RollBib: React.FC = () => {
  const [stepRoll, setStepRoll] = useState<{ key: EKeyStepRollBib; data?: any }>({
    key: EKeyStepRollBib.ROLL,
  });

  return (
    <div className="RollBib">
      <div className="RollBib-background">
        <img src={BgRollBib} alt="" />
      </div>
      <div className="container">
        <div className="RollBib-wrapper">
          {stepRoll.key === EKeyStepRollBib.ROLL && (
            <RollBibWheel
              color={EIconColor.BLUE_RIBBON}
              onNext={(data): void => setStepRoll({ key: EKeyStepRollBib.SUCCESS, data })}
            />
          )}
          {stepRoll.key === EKeyStepRollBib.SUCCESS && (
            <RollBibCardRollSuccess data={stepRoll.data} color={EIconColor.BLUE_RIBBON} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RollBib;
