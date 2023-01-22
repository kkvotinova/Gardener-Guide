import { DialogContent, styled, css } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledDialogContent = styled(DialogContent, transientProps)<{
  $hasEmptyPadding?: boolean;
}>`
  ${({ $hasEmptyPadding }) =>
    $hasEmptyPadding &&
    css`
      padding-top: 0px !important;
    `}
`;
