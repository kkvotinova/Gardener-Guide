import ReactDOM from 'react-dom/client';
import React from 'react';
import { CssBaseline } from '@mui/material';

import Router from '@/components/Router';
import ReduxProvider from '@/components/ReduxProvider';
import MaterialThemeProvider from '@/components/MaterialThemeProvider';
import AppModalsList from '@/components/AppModalsList';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <MaterialThemeProvider>
      <CssBaseline />
      <ReduxProvider>
        <Router />
        <AppModalsList />
      </ReduxProvider>
    </MaterialThemeProvider>
  </React.StrictMode>,
);
