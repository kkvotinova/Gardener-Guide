import { IconButton, Stack, styled } from '@mui/material';

import ImageMoonPhases from '@/images/ImageMoonPhases.png';

import transientProps from '@/utils/transientProps';

export const StyledMoonWrapper = styled(Stack)`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 20px;

  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #eee;
  border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};

  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
`;

export const StyledMoon = styled(Stack)`
  width: 200px;
  height: 160px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 850px) {
    width: 50%;
    height: 200px;
  }
`;

export const StyledMoonImage = styled('div', transientProps)<{ $position: string }>`
  width: 69px;
  height: 69px;
  background: url(${ImageMoonPhases}) no-repeat;
  background-position: ${({ $position }) => $position};
`;

export const StyledDay = styled(Stack, transientProps)<{ $bgColor: string }>`
  padding: 8px 16px;

  flex-direction: row;
  align-items: flex-end;

  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;

export const StyledContentWrapper = styled('div')`
  gap: 32px;

  display: flex;
  flex-direction: row;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const StyledIconButton = styled(IconButton)`
  @media (min-width: 1100px) {
    display: none;
  }
`;
