import { useSearchParams } from 'react-router-dom';
import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { Button, TextField } from '@mui/material';

import { SearchProps } from '@/components/Search/SearchTypes';
import { StyledSearch } from '@/components/Search/SearchStyled';

const Search = ({ queryName, isFullWidth = false, isCustom = false }: SearchProps) => {
  const [inputValue, setInputValue] = useState('');

  const [, setSearchParams] = useSearchParams('');

  const handleChangeQueryParam = () => {
    setSearchParams({ [queryName]: inputValue });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleChangeQueryParam();
    }
  };

  return (
    <StyledSearch $isFullWidth={isFullWidth} $isCustom={isCustom}>
      <TextField
        fullWidth
        label='Поиск'
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        sx={{ '& fieldset': { border: 'none' } }}
      />
      {!isCustom && (
        <Button variant='contained' color='primary' onClick={handleChangeQueryParam}>
          Найти
        </Button>
      )}
    </StyledSearch>
  );
};

export default Search;
