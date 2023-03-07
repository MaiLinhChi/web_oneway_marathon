import { TSelectOption } from '@/components/Select';

export type TRadioProps = {
  className?: string;
  value?: TSelectOption;
  spacing?: number;
  options?: TSelectOption[];
  onChange?: (data: TSelectOption) => void;
};
