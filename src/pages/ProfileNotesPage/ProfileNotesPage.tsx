import { useMemo } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Search from '@/components/Search';
import Note from '@/components/Note';

import ModalNote from '@/modals/ModalNote/ModalNote';

const queryName = 'title';

const NOTES = [
  {
    _id: '12345678',
    title: 'Test',
    description:
      // eslint-disable-next-line max-len
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti excepturi veniam commodi quam incidunt modi iure voluptates quibusdam! Exercitationem veniam quia consectetur natus, voluptatum tempore, et, aspernatur id blanditiis repellendus dolore. Deserunt voluptatem, a dolor maiores sed vero! Esse voluptates magnam reprehenderit ex facilis optio culpa molestias inventore eveniet voluptas itaque officiis temporibus dolorem ipsa obcaecati accusamus odit perferendis hic distinctio, eaque rerum amet pariatur doloremque laudantium. Consequuntur dicta modi eligendi nam vero quia, deserunt excepturi saepe sunt temporibus in delectus nisi repellendus, debitis distinctio totam amet accusantium velit odit. Est ipsam nemo, consectetur quod illo esse repellendus eos sunt cum libero nulla ullam soluta quisquam ex consequatur dolor odit veritatis natus, debitis, voluptas architecto mollitia tenetur exercitationem! Architecto?',
  },
];

const ProfileNotesPage = () => {
  const config = useMemo(() => {
    return NOTES.map((a) => <Note key={a._id} {...a} />);
  }, []);

  const PageHeader = () => (
    <Stack direction='row' spacing={12} alignItems='center'>
      <Search queryName={queryName} isFullWidth isCustom />
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
