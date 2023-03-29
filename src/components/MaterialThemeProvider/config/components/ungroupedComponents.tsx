import { Components, Theme } from '@mui/material';

const ungroupedComponents: Components<Omit<Theme, 'components'>> = {
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
      },
    },
  },
};

export default ungroupedComponents;
