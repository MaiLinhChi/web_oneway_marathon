export type TPaginationProps = {
  className?: string;
  page: number;
  pageSize: number;
  total?: number;
  onChange?: (page: number, pageSize?: number) => void;
};
