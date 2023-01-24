import { styled, Typography } from '@mui/material';

export const StyledTypography = styled(Typography)`
  margin-top: 16px;
  color: ${({ theme }) => theme.palette.secondary.main};
  cursor: pointer;
`;
