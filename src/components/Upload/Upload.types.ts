export type TUploadProps = {
  className?: string;
  value?: any;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (data: FileList | null) => void;
  children?: React.ReactNode;
};
