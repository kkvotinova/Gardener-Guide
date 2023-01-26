import { styled } from '@mui/material';

export const StyledFooter = styled('footer')`
  margin-top: 20px;

  padding: 20px 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  // TODO: нормальное решение
  right: 0;
  bottom: 0;
  position: absolute;

  background-color: ${({ theme }) => theme.palette.primary.dark};
`;
