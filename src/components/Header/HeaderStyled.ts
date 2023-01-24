import { Button, styled } from '@mui/material';

export const StyledHeader = styled('header')`
  margin: 12px 0 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.dark};
  border-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const StyledLogo = styled('img')`
  width: 55px;
  height: 55px;

  cursor: pointer;
`;
