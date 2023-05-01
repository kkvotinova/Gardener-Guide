import { List, styled } from '@mui/material';

export const StyledNewsList = styled(List)`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  & > a {
    margin-bottom: 36px;
  }

  & > a:not(:last-child) {
    margin-right: 36px;
  }
`;
