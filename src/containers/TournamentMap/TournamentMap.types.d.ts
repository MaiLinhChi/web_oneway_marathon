import { EIconColor } from '@/components/Icon';

export type TTournamentMapProps = {
  title?: string;
  data?: any;
  stepKilometer?: Array<TStepKilometerTournamentMap>;
  color?: EIconColor;
  id?: string;
  noRouteMap?: boolean;
  height?: number;
};

export type TStepKilometerTournamentMap = {
  id?: any;
  name: string;
  routeMap: string;
  distance?: number;
  image?: string;
  unit?: string;
};
