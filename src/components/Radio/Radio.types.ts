import { TSelectOption } from '@/components/Select';

export type TRadioProps = {
  className?: string;
  value?: TSelectOption;
  options?: TSelectOption[];
  onChange?: (data: TSelectOption) => void;
};
