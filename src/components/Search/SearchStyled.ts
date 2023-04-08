import { css, styled } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledSearch = styled('div', transientProps)<{
  $isFullWidth: boolean;
  $isCustom: boolean;
}>`
  margin: 0 auto;
  margin-bottom: 40px;

  max-width: 800px;

  display: flex;
  align-items: center;

  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06), 0px 8px 32px rgba(0, 0, 0, 0.04);
  border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};

  & > MuiInputBase-root > .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }

  & > .MuiButtonBase-root {
    width: 120px;
    height: 48px;
    border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};
  }

  ${({ $isFullWidth }) =>
    $isFullWidth &&
    css`
      width: 100%;
    `}

  ${({ $isCustom }) =>
    $isCustom &&
    css`
      margin: 0;
      max-width: 100%;
      box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.04);
    `}
`;
