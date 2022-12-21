import { SizeType } from 'antd/lib/config-provider/SizeContext';

import { TSelectOption } from '@/components/Select';
import { ETabRectangleStyleType } from '@/components/TabRectangle/TabRectangle.enums';

export type TTabRectangleValue = TSelectOption & {
  hide?: boolean;
};

export type TTabRectangleProps = {
  keyTab?: string;
  value?: TTabRectangleValue;
  size?: SizeType;
  options?: TTabRectangleValue[];
  styleType?: ETabRectangleStyleType;
  className?: string;
  widthAuto?: boolean;
  onChange?: (value: TTabRectangleValue) => void;
};
