import Notification from '@/components/Notification';

import { AlerterTypes } from '@/utils/Alerter/AlerterTypes';

class Alerter {
  show(message: string, type = AlerterTypes.error, delay?: number) {
    Notification.show({ type, message, delay });
  }

  logError(place: string, ...args: unknown[]) {
    if (args.length) console.error(...args);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Alerter();
