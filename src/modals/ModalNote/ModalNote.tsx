import { useCallback } from 'react';
import { DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Modal from '@/components/Modal';

import { ApiNote } from '@/redux/services/notes/notes.types';
import withStaticModal, { StaticModalWrappedComponent } from '@/modals/withStaticModal';
import { FormModalNoteValues } from '@/modals/ModalNote/ModalNoteTypes';
import FormElement from '@/form/FormElement';
import Form from '@/form/Form';

const ModalNote: StaticModalWrappedComponent<ApiNote> = (props) => {
  const isEdit = Boolean(props.data?._id);

  const handleSubmit = useCallback(() => {}, []);

  const title = isEdit ? 'Редактировать запись' : 'Добавить запись';
  const buttonText = isEdit ? 'Сохранить' : 'Добавить';

  const isLoading = false;

  return (
    <Modal {...props} title={title}>
      <Form onSubmit={handleSubmit}>
        <FormElement
          label='Заголовок'
          component='input'
          rules={{ required: true, minLength: 4 }}
          name={FormModalNoteValues.TITLE}
        />

        <FormElement
          isMultiline
          label='Описание'
          component='input'
          rules={{ required: true, minLength: 4 }}
          name={FormModalNoteValues.DESCRIPTION}
        />

        <DialogActions>
          <LoadingButton variant='contained' type='submit' loading={isLoading}>
            {buttonText}
          </LoadingButton>
        </DialogActions>
      </Form>
    </Modal>
  );
};

export default withStaticModal<ApiNote>(ModalNote);
