import React from 'react';
import { TFormLabelProps } from '@/components/FormLabel';

export type TUploadAvatarProps = TFormLabelProps & {
  value?: string;
  label?: string;
  typePreview?: 'scale' | 'origin';
  overlay?: React.ReactNode;
  onChange?: (url: File) => void;
};
