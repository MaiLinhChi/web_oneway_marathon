import { TooltipPlacement } from 'antd/lib/tooltip';

export type TTooltipProps = {
  className?: string;
  title: string;
  overlayClassName?: string;
  placement?: TooltipPlacement;
  children?: React.ReactNode;
};
