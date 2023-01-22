import { Alert, css } from '@mui/material';
import { Close } from '@mui/icons-material';
import styled from '@emotion/styled';

import { NotificationItemStyledProps } from '@/components/NotificationItem/NotificationItemTypes';

import transientProps from '@/utils/transientProps';

export const StyledNotification = styled(Alert, transientProps)<NotificationItemStyledProps>`
  overflow: hidden;
  transition: all 500ms;

  width: 100%;
  margin-bottom: 16px;

  .MuiAlert-message {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  ${({ $isVisible }) =>
    !$isVisible &&
    css`
      margin: 0;
      opacity: 0;
      padding-top: 0;
      padding-bottom: 0;
      height: 0 !important;
    `};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledClose = styled(Close)`
  opacity: 0.5;
  margin-top: 2px;
  font-size: 16px;
  margin-left: 12px;

  cursor: pointer;
  transition: all 250ms;

  &:hover {
    opacity: 1;
  }
`;
