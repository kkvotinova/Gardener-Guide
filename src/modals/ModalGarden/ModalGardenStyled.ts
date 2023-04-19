import { styled, FormControlLabel } from '@mui/material';

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin-bottom: 16px;
  margin-left: 0px;
  padding: 16px;

  width: 100%;

  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border: 1px solid #eee;

  & .MuiFormControlLabel-label {
    width: 100%;
  }
`;
