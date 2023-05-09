import { useLocation, useSearchParams } from 'react-router-dom';
import { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import { Button, TextField } from '@mui/material';

import { SearchProps } from '@/components/Search/SearchTypes';
import { StyledSearch } from '@/components/Search/SearchStyled';

const Search = ({
  queryName,
  isFullWidth = false,
  isCustom = false,
  defaultValue = '',
}: SearchProps) => {
  const location = useLocation();

  const [inputValue, setInputValue] = useState(defaultValue);

  const [, setSearchParams] = useSearchParams(defaultValue);

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

  useEffect(() => {
    setInputValue('');
  }, [location.pathname]);

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
