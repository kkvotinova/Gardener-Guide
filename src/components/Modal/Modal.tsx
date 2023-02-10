import { Dialog, DialogTitle, IconButton } from '@mui/material';

import { ModalProps } from '@/components/Modal/ModalTypes';
import { StyledDialogContent } from '@/components/Modal/ModalStyled';

import IconClose from '@/icons/IconClose';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  maxWidth = 'sm',
  hasEmptyPadding = false,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth={maxWidth} className={className} fullWidth>
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
