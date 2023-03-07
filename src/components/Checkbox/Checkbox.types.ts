import React from 'react';

export type TCheckboxProps = {
  className?: string;
  label?: React.ReactNode;
  value?: boolean;
  onChange?: (checked: boolean) => void;
};
