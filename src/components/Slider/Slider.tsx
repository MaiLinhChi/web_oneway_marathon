import React from 'react';
import { Slider as AntdSlider } from 'antd';

import { TSliderProps } from './Slider.types.d';
import './Slider.scss';

const Slider: React.FC<TSliderProps> = ({ value, onChange, onAfterChange, disabled, range }) => {
  return (
    <div className="Slider">
      <AntdSlider value={value} onChange={onChange} onAfterChange={onAfterChange} disabled={disabled} range={range} />
    </div>
  );
};

export default Slider;
