import { styled } from '@mui/material';

export const StyledFooter = styled('footer')`
  margin-top: 48px;
  padding: 20px 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.palette.primary.dark};
`;
