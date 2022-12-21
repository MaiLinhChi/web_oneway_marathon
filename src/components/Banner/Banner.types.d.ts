import React from 'react';

export type TBannerProps = {
  height?: string;
  text?: string;
  id?: string;
  subText?: string;
  backgroundFitContent?: boolean;
  image: string;
  children?: React.ReactNode;
};
