import { useSearchParams } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';

import { SearchProps } from '@/components/Search/SearchTypes';
import { StyledSearch } from '@/components/Search/SearchStyled';

const Search = ({ queryName }: SearchProps) => {
  const [inputValue, setInputValue] = useState('');

  const [, setSearchParams] = useSearchParams('');

  const handleChangeQueryParam = () => {
    setSearchParams({ [queryName]: inputValue });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledSearch>
      <TextField
        fullWidth
        label='Поиск'
        value={inputValue}
        onChange={handleInputChange}
        sx={{ '& fieldset': { border: 'none' } }}
      />
      <Button variant='contained' color='primary' onClick={handleChangeQueryParam}>
        Найти
      </Button>
    </StyledSearch>
  );
};

export default Search;
