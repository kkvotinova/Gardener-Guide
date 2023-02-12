import { List, styled } from '@mui/material';

export const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > a {
    margin-bottom: 36px;
  }

  & > a:not(:last-child) {
    margin-right: 36px;
  }
`;
