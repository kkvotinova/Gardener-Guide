import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';

import store from '@/redux';

const ReduxProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
