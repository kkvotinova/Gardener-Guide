import { Stack, styled } from '@mui/material';

import moonPhases from '@/images/moonPhases.png';

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
`;

export const StyledMoon = styled(Stack)`
  width: 200px;
  height: 160px;
  flex-direction: column;
  align-items: center;
`;

export const StyledMoonImage = styled('div', transientProps)<{ $position: string }>`
  width: 69px;
  height: 69px;
  background: url(${moonPhases}) no-repeat;
  background-position: ${({ $position }) => $position};
`;

export const StyledDay = styled(Stack, transientProps)<{ $bgColor: string }>`
  padding: 8px 16px;

  flex-direction: row;
  align-items: flex-end;

  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;
