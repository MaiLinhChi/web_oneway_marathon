import { Moment } from 'moment';

export type TDatePickerProps = {
  className?: string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: any) => void;
  disabledDate?: (current: Moment) => boolean;
};
