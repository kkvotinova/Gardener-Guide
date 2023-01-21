import { styled } from '@mui/material';

import { StyledIconProps } from '@/components/Icon/IconTypes';

import transientProps from '@/utils/transientProps';

export const StyledIcon = styled('svg', transientProps)<StyledIconProps>`
  cursor: ${({ $isPointer, onClick }) => ($isPointer || onClick) && 'pointer'};
`;
