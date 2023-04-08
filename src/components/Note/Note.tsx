import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { NoteProps } from '@/components/Note/NoteTypes';

import { useDeleteNoteByIdMutation } from '@/redux/services/notes/notes';
import ModalNote from '@/modals/ModalNote/ModalNote';
import ModalConfirm from '@/modals/ModalConfirm/ModalConfirm';

const Note = (props: NoteProps) => {
  const { _id, title, description } = props;

  const [deleteNote] = useDeleteNoteByIdMutation();

  const openAddNoteModal = () => {
    ModalNote.show(props);
  };

  const handleDeleteNote = () => {
    ModalConfirm.show({
      withAwaiting: true,
      onContinue: async () => {
        await deleteNote(_id);
      },
    });
  };

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }}>
        <IconButton onClick={openAddNoteModal}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDeleteNote}>
          <DeleteIcon color='error' />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Note;
