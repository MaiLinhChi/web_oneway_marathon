import { EIconColor } from '@/components/Icon';

export type TTournamentMapProps = {
  title?: string;
  stepKilometer?: Array<TStepKilometerTournamentMap>;
  color?: EIconColor;
};

export type TStepKilometerTournamentMap = {
  id?: any;
  name: string;
  description: string;
  distance?: number;
  road_map_image?: string;
};
