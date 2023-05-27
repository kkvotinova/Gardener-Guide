import { Button, IconButton, styled } from '@mui/material';

export const StyledHeader = styled('header')`
  margin: 12px 0 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    & > .MuiTypography-root {
      font-size: 20px;
    }
  }
`;

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.dark};
  border-color: ${({ theme }) => theme.palette.primary.dark};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledLogo = styled('img')`
  width: 55px;
  height: 55px;

  cursor: pointer;
`;

export const StyledIconButton = styled(IconButton)`
  @media (min-width: 600px) {
    display: none;
  }
`;
