import { Dialog, DialogTitle, IconButton } from '@mui/material';

import { ModalProps } from '@/components/Modal/ModalTypes';
import { StyledDialogContent } from '@/components/Modal/ModalStyled';

import IconClose from '@/icons/IconClose';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'sm',
  hasEmptyPadding = false,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth={maxWidth} fullWidth>
      <DialogTitle>
        {title}
        <IconButton onClick={onClose}>
          <IconClose />
        </IconButton>
      </DialogTitle>

      <StyledDialogContent $hasEmptyPadding={hasEmptyPadding}>{children}</StyledDialogContent>
    </Dialog>
  );
};

export default Modal;
