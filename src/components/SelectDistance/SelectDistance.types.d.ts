export type TSelectDistanceProps = {
  data?: TSelectDistanceData[];
  value?: TSelectDistanceData;
  onChange?: (data: TSelectDistanceData) => void;
};

export type TSelectDistanceData = {
  label: string;
  value: string;
  description: string;
  suffix: string;
};
