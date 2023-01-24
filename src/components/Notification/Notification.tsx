import { Component } from 'react';
import { Portal } from '@mui/material';

import { NotificationItemData } from '@/components/NotificationItem/NotificationItemTypes';
import NotificationItem from '@/components/NotificationItem';
import { NotificationProps, NotificationState } from '@/components/Notification/NotificationTypes';
import { StyledNotification } from '@/components/Notification/NotificationStyled';

class Notification extends Component<NotificationProps, NotificationState> {
  static instance?: Notification = undefined;

  static show(notification: NotificationItemData) {
    if (!Notification.instance) return;
    Notification.instance.show(notification);
  }

  constructor(props: NotificationProps) {
    super(props);
    this.state = {
      notifications: {},
    };

    Notification.instance = this;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  private show(notification: NotificationItemData) {
    const id = Math.random().toString(36).slice(2);

    const notifications = {
      ...this.state.notifications,
      [id]: notification,
    };

    this.setState({ notifications });
  }

  private hide(id: string) {
    const notifications = { ...this.state.notifications };
    delete notifications[id];

    this.setState({ notifications });
  }

  render() {
    if (Object.keys(this.state.notifications).length === 0) return null;

    return (
      <Portal container={document.body}>
        <StyledNotification>
          {Object.entries(this.state.notifications).map(([id, data]) => (
            <NotificationItem key={id} id={id} data={data} hide={this.hide} />
          ))}
        </StyledNotification>
      </Portal>
    );
  }
}

export default Notification;
