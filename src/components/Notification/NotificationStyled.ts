import { styled } from '@mui/material';

export const StyledNotification = styled('div')`
  top: 24px;
  right: 24px;

  position: fixed;
  z-index: 100000;

  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    width: calc(100% - 48px);
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 300px;
  }
`;
