import { ReactNode } from 'react';
import { DialogProps } from '@mui/material';

export interface ModalProps extends Pick<DialogProps, 'maxWidth'> {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | ReactNode[];
  hasEmptyPadding?: boolean;
  className?: string;
}
