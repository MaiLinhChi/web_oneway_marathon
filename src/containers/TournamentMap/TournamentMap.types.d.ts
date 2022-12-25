import { EIconColor } from '@/components/Icon';
import { TSelectOption } from '@/components/Select';

export type TTournamentMapProps = {
  title?: string;
  stepKilometer?: TStepKilometerTournamentMap[];
  color?: EIconColor;
};

export type TStepKilometerTournamentMap = {
  value: string;
  label: string;
  image: string;
  list?: TSelectOption[];
};
