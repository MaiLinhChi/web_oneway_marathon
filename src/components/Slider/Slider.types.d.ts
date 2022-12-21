export type TSliderProps = {
  value?: number;
  onChange?: (value: number) => void;
  onAfterChange?: (value: number) => void;
  disabled?: boolean;
  range?: SliderRange;
};
