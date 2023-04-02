import { Button, DialogActions, DialogContentText } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Modal from '@/components/Modal';

import useAwaitCallback from '@/hooks/useAwaitCallback';

import withStaticModal, { StaticModalWrappedComponent } from '@/modals/withStaticModal';
import { ModalConfirmProps } from '@/modals/ModalConfirm/ModalConfirmTypes';

const ModalConfirm: StaticModalWrappedComponent<ModalConfirmProps> = (props) => {
  const {
    onCancel,
    onContinue,
    onlyContinue = false,
    withAwaiting = false,

    cancelLabel = 'Нет',
    continueLabel = 'Да',
    title = 'Вы уверены?',
    subTitle = 'После подтверждения, восстановление будет невозможно',
  } = props.data || {};

  const [createClickHandler, isLoading] = useAwaitCallback(
    async (type: 'cancel' | 'continue') => {
      if (type === 'continue' && onContinue) {
        const continueResult = onContinue();

        if (withAwaiting) {
          await continueResult;
        }
      } else if (type === 'cancel' && onCancel) {
        onCancel();
      }

      props.onClose();
    },
    [onCancel, onContinue, props, withAwaiting],
  );

  if (!props.data) return null;

  return (
    <Modal {...props} maxWidth={props.data.maxWidth} title={title} hasEmptyPadding>
      {subTitle && <DialogContentText sx={{ paddingLeft: '8px' }}>{subTitle}</DialogContentText>}

      <DialogActions>
        {!onlyContinue && (
          <Button variant='contained' color='error' onClick={() => createClickHandler('cancel')}>
            {cancelLabel}
          </Button>
        )}

        <LoadingButton
          variant='contained'
          loading={isLoading}
          onClick={() => createClickHandler('continue')}
        >
          {continueLabel}
        </LoadingButton>
      </DialogActions>
    </Modal>
  );
};

export default withStaticModal<ModalConfirmProps>(ModalConfirm);
