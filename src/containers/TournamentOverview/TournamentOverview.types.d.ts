export type TTournamentOverviewProps = {
  dataNav?: TTournamentOverviewNav[];
  color?: string;
  title?: string;
  stepKilometer?: TTournamentOverviewStepKilometer[];
  description?: string;
  dateTournament?: string;
  locationTournament?: string;
  typeTournament?: string;
  background?: string;
  expired?: boolean;
  date: string;
  id?: any;
};

export type TTournamentOverviewNav = {
  title: string;
  link: string;
};

export type TTournamentOverviewStepKilometer = {
  value: string;
  label: string;
};
