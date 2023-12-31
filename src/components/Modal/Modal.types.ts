import { TButtonProps } from '@/components/Button';

export type TModalProps = {
  className?: string;
  wrapClassName?: string;
  visible: boolean;
  width?: string | number;
  centered?: boolean;
  cancelButton?: TButtonProps;
  confirmButton?: TButtonProps;
  closeable?: boolean;
  loadingConfirmButton?: boolean;
  hideFooter?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  children?: React.ReactNode;
};
