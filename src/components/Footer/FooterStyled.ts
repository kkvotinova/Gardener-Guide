import { styled } from '@mui/material';

export const StyledFooter = styled('footer')`
  padding: 20px 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  right: 0;
  position: absolute;

  background-color: ${({ theme }) => theme.palette.primary.dark};
`;
