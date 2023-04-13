import { styled } from '@mui/material';

export const StyledMainInfo = styled('div')`
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledDescription = styled('div')`
  padding: 30px 40px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .mui-image-wrapper {
    align-self: center;
  }
`;
