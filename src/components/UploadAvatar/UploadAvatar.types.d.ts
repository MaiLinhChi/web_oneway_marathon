import { TFormLabelProps } from '@/components/FormLabel';

export type TUploadAvatarProps = TFormLabelProps & {
  value?: string;
  label?: string;
  typePreview?: 'scale' | 'origin';
  onChange?: (url: File) => void;
};
