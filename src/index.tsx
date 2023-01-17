import ReactDOM from 'react-dom/client';
import React from 'react';
import { CssBaseline } from '@mui/material';

import MaterialThemeProvider from '@/components/MaterialThemeProvider';

import App from '@/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <MaterialThemeProvider>
      <CssBaseline />
      <App />
    </MaterialThemeProvider>
  </React.StrictMode>,
);
