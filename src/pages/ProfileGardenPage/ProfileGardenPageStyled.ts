import { Grid, css, styled } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledGridContainer = styled(Grid)`
  margin: auto;
  width: 600px;
`;

export const Square = styled(Grid, transientProps)<{ $isEmpty?: boolean }>`
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  ${({ $isEmpty }) =>
    $isEmpty
      ? css`
          &:hover {
            background-color: rgba(164, 232, 134, 0.5);
          }
          &:active {
            background-color: rgb(164, 232, 134);
          }
        `
      : css`
          &:hover {
            & img {
              transform: scale(1.1);
            }
          }
          &:active {
            & img {
              transform: scale(0.8);
            }
          }
        `}

  cursor: pointer;
  border: 1px solid #a37620;
`;

export const StyledContentWrapper = styled('div')`
  width: 100%;
  overflow: scroll;
`;
