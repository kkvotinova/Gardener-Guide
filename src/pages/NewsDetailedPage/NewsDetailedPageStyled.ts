import MuiImage from 'mui-image';
import styled from '@mui/material/styles/styled';
import TextField from '@mui/material/TextField';

import transientProps from '@/utils/transientProps';

export const StyledImageWrapper = styled('a')`
  width: 400px;
  height: 300px;

  transition: all 0.3s ease;
  &:active {
    transform: scale(0.99);
  }
`;

export const StyledImage = styled(MuiImage, transientProps)`
  border-radius: 8px;
`;

export const StyledInput = styled(TextField)`
  width: 600px;
`;
