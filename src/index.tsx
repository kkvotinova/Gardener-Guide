import { ErrorBoundary } from 'react-error-boundary';
import ReactDOM from 'react-dom/client';
import React from 'react';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
import { CssBaseline } from '@mui/material';

import Router from '@/components/Router';
import ReduxProvider from '@/components/ReduxProvider';
import Notification from '@/components/Notification';
import MaterialThemeProvider from '@/components/MaterialThemeProvider';

import InternalServerError from '@/routes/InternalServerError';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

require('dayjs/locale/ru');

dayjs.extend(localizedFormat);
dayjs.locale('ru');

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={InternalServerError}>
      <MaterialThemeProvider>
        <CssBaseline />
        <ReduxProvider>
          <Router />
          <Notification />
        </ReduxProvider>
      </MaterialThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
