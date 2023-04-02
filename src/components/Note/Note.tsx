import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { NoteProps } from '@/components/Note/NoteTypes';

const Note = ({ title, description }: NoteProps) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon color='error' />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Note;
