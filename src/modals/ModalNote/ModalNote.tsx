import { useCallback } from 'react';
import { DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Modal from '@/components/Modal';

import { ApiNote } from '@/redux/services/notes/notes.types';
import { useCreateNoteMutation, useUpdateNoteByIdMutation } from '@/redux/services/notes/notes';
import withStaticModal, { StaticModalWrappedComponent } from '@/modals/withStaticModal';
import { FormModalNoteValues, FormModalNoteData } from '@/modals/ModalNote/ModalNoteTypes';
import FormElement from '@/form/FormElement';
import Form from '@/form/Form';

const ModalNote: StaticModalWrappedComponent<ApiNote> = (props) => {
  const defaultValues = {
    [FormModalNoteValues.TITLE]: props.data?.title || '',
    [FormModalNoteValues.DESCRIPTION]: props.data?.description || '',
  };

  const [createNote, { isLoading: isCreateLoading }] = useCreateNoteMutation();
  const [updateNote, { isLoading: isUpdateLoading }] = useUpdateNoteByIdMutation();

  const isEdit = Boolean(props.data?._id);

  const handleSubmit = useCallback(
    async (data: FormModalNoteData) => {
      const response = isEdit
        ? await updateNote({ ...data, id: props.data!._id })
        : await createNote(data);

      if ('data' in response) {
        props.onClose();
      }
    },
    [createNote, isEdit, props, updateNote],
  );

  const title = isEdit ? 'Редактировать запись' : 'Добавить запись';
  const buttonText = isEdit ? 'Сохранить' : 'Добавить';

  const isLoading = isCreateLoading || isUpdateLoading;

  return (
    <Modal {...props} title={title}>
      <Form onSubmit={handleSubmit} defaultValues={defaultValues}>
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
