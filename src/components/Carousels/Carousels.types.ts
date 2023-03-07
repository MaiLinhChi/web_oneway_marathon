export type TCarouselsProps = {
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  slidesPerRow?: number;
  variableWidth?: boolean;
  responsive?: Array<any>;
  children?: React.ReactNode;
  onDragging?: (dragging: boolean) => void;
};
