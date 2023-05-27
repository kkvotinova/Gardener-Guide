import { styled } from '@mui/material';

export const StyledContentWrapper = styled('div')`
  margin: 0 auto;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledContent = styled('div')`
  margin: 0 auto;

  width: 100%;
  max-width: 1240px;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;
