import React, { CSSProperties } from 'react';

export type TDropdownCustomProps = {
  className?: string;
  noUseVisible?: boolean;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  overlay: React.ReactElement;
  overlayStyle?: CSSProperties;
  visible?: boolean;
  placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'top' | 'bottom';
  overlayClassName?: string;
  getPopupContainer?: (container: HTMLElement) => HTMLElement;
  children?: React.ReactNode;
  onVisibleChange?: (visible: boolean) => void;
};
