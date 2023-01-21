import ReactDOM from 'react-dom/client';
import React from 'react';
import { CssBaseline } from '@mui/material';

import Router from '@/components/Router';
import MaterialThemeProvider from '@/components/MaterialThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <MaterialThemeProvider>
      <CssBaseline />
      <Router />
    </MaterialThemeProvider>
  </React.StrictMode>,
);
