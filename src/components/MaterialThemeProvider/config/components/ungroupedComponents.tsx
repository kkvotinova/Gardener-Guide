import { Components, Theme } from '@mui/material';

const ungroupedComponents: Components<Omit<Theme, 'components'>> = {
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
      },
    },
  },

  MuiCard: {
    variants: [
      {
        props: { variant: 'outlined' },
        style: {
          borderColor: '#eee',
          borderRadius: '12px',
        },
      },
    ],
  },
};

export default ungroupedComponents;
