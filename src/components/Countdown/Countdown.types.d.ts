export type TCountdownProps = {
  dateTo?: string;
  dateFrom: string;
  render?: (data: TCoundownData) => React.ReactNode;
  onFinish?: (isEnd?: boolean) => void;
};

export type TCoundownData = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
