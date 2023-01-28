import { styled } from '@mui/material';

export const StyledSearch = styled('div')`
  margin: 0 auto;
  margin-bottom: 40px;

  max-width: 800px;

  display: flex;
  align-items: center;

  box-shadow: 0px 8px 24px rgba(129, 135, 189, 0.15);
  border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};

  & > MuiInputBase-root > .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }

  & > .MuiButtonBase-root {
    width: 120px;
    height: 48px;
    border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};
  }
`;
