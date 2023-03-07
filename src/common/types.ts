export type TCommonResponse = {
  status: number;
  message: string;
};

export type TCommonPaginate = {
  currentPage: number;
  pageSize: number;
  total: number;
};
