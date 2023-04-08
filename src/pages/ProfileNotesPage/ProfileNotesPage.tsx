import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Search from '@/components/Search';
import Note from '@/components/Note';
import Loader from '@/components/Loader';

import { useGetNotesQuery } from '@/redux/services/notes/notes';
import ModalNote from '@/modals/ModalNote/ModalNote';

const queryName = 'title';

const ProfileNotesPage = () => {
  const [searchParams] = useSearchParams();

  const queryValue = searchParams.get(queryName);

  const { data: notes, isLoading } = useGetNotesQuery({ title: queryValue || undefined });

  const config = useMemo(() => {
    return (notes || []).map((a) => <Note key={a._id} {...a} />);
  }, [notes]);

  const PageHeader = () => (
    <Stack direction='row' spacing={12} alignItems='center'>
      <Search queryName={queryName} isFullWidth isCustom defaultValue={queryValue || ''} />
      <Button
        color='secondary'
        variant='contained'
        startIcon={<AddIcon />}
        onClick={() => ModalNote.show()}
      >
        Заметка
      </Button>
    </Stack>
  );

  if (isLoading) {
    return (
      <Stack direction='column' spacing={30}>
        <PageHeader />
        <Loader />
      </Stack>
    );
  }

  if (!config.length) {
    return (
      <Stack direction='column' spacing={30}>
        <PageHeader />
        <Typography textAlign='center' fontSize={20} color='text.secondary' mt={30}>
          По вашему запросу ничего не найдено
        </Typography>
      </Stack>
    );
  }

  return (
    <>
      <PageHeader />
      <Stack direction='column' spacing={6} mt={13}>
        {config}
      </Stack>
    </>
  );
};

export default ProfileNotesPage;
