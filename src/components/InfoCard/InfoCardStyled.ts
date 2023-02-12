import { styled, css, Stack } from '@mui/material';

import ImageInfo from '@/images/ImageInfo.png';

import transientProps from '@/utils/transientProps';

export const StyledInfoCard = styled(Stack, transientProps)<{ $hasInfo: boolean }>`
  padding: 8px 0px;
  width: 148px;

  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(129, 135, 189, 0.15);

  transition: all 0.3s linear;

  ${({ $hasInfo }) =>
    $hasInfo &&
    css`
      cursor: pointer;
      &:hover {
        transform: scale(0.95);
        background-color: rgba(0, 0, 0, 0.02);
      }
      background-image: url(${ImageInfo});
      background-repeat: no-repeat;
      background-position: 130px 6px;
      background-size: 12px;
    `}
`;

export const StyledImage = styled('img')`
  margin-bottom: 16px;
  max-width: 100px;
  max-height: 100px;
`;
