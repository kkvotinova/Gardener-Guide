import { NotificationItemData } from '@/components/NotificationItem/NotificationItemTypes';

export interface NotificationProps {}

export interface NotificationState {
  notifications: Record<string, NotificationItemData>;
}
