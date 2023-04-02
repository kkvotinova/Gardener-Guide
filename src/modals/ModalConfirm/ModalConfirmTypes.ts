import { DialogProps } from '@mui/material';

export interface ModalConfirmProps extends Pick<DialogProps, 'maxWidth'> {
  title?: string;
  subTitle?: string;
  cancelLabel?: string;
  continueLabel?: string;

  onlyContinue?: boolean;
  withAwaiting?: boolean;

  onCancel?: () => void;
  onContinue?: () => void;
}
