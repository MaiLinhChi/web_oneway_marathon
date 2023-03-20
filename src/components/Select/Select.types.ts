export type TSelectProps = {
  className?: string;
  placeholder?: string;
  value?: TSelectOption;
  options?: TSelectOption[];
  showSearch?: boolean;
  disabled?: boolean;
  defaultValue?: TSelectOption;
  allowClear?: boolean;
  dropdownClassName?: string;
  onSearch?: (keyword: string) => void;
  paginate?: {
    page: number;
    pageSize: number;
    total: number;
  };
  onLoadMore?: () => void;
  onChange?: (option: TSelectOption | null) => void;
};

export type TSelectOption = {
  id?: number;
  label: string;
  value: string;
  data?: any;
  disabled?: boolean;
};
