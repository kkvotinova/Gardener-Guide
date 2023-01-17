import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme();

const MaterialThemeProvider = ({ children }: { children?: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialThemeProvider;
