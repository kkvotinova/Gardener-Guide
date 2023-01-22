import { AlertColor } from '@mui/material';

export interface NotificationItemData {
  message: string;
  type?: AlertColor;
  delay?: number;
}

export interface NotificationItemProps {
  id: string;
  data: NotificationItemData;
  hide: (id: string) => void;
}

export interface NotificationItemStyledProps {
  $isVisible: boolean;
}
