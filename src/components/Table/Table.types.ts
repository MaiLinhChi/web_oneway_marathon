import React from 'react';

export type TTableProps = {
  className?: string;
  columns: TTableColumn[];
  dataSources: Array<any> | undefined;
  rowKey?: string;
  loading?: boolean;
  title?: () => React.ReactElement;
  onSearch?: (keyword: string) => void;
};

export type TTableColumn = {
  title: string;
  key: string | number;
  dataIndex: string;
  className?: string;
  fixed?: any;
  ellipsis?: boolean;
  width?: string | number;
  sorter?: ((a: any, b: any) => number) | boolean;
  render?: (text: string, record: any, index: number) => React.ReactElement | string;
};
