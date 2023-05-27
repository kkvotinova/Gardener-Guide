import Image from 'mui-image';
import { Grid, css, styled } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledGridContainer = styled(Grid)`
  margin: auto;
  width: 600px;

  @media (max-width: 620px) {
    width: 100%;
  }
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

  @media (max-width: 620px) {
    height: calc(94vw / 4);

    & > .mui-image-wrapper {
      width: 100% !important;
      height: 100% !important;
    }
  }
`;

export const StyledImage = styled(Image)`
  @media (max-width: 620px) {
    width: 60% !important;
    height: 60% !important;
  }
`;
