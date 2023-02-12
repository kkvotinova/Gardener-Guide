import { styled, Stack } from '@mui/material';

export const StyledStack = styled(Stack)`
  margin-bottom: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column !important;
  }
`;

export const StyledMainInfo = styled(Stack)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-left: 0 !important;
    margin-top: ${({ theme }) => theme.spacing(10)} !important;
  }
`;

export const StyledQuickInfo = styled('div')`
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  & div {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }

  & div:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;

export const StyledNeighborsList = styled(Stack)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-left: 0 !important;
    margin-top: ${({ theme }) => theme.spacing(8)} !important;
  }
`;
