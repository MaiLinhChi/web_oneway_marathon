export type TWrapperLazyLoadProps = {
  maxHeight: number;
  loading?: boolean;
  resetScrollToTop?: boolean;
  resetScrollToBottom?: boolean;
  children?: React.ReactNode;
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
  onResetScrollSuccess?: () => void;
  onTop?: () => void;
  onEnd?: () => void;
};
