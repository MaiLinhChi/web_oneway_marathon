import { Moment } from 'moment';

export type TTimePickerProps = {
  className?: string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  showNow?: boolean;
  onChange?: (value: any) => void;
  disabledDate?: (current: Moment) => boolean;
};
