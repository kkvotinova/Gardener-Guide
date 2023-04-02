import { Components, Theme } from '@mui/material';

import shape from '@/components/MaterialThemeProvider/config/shape';

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
          borderRadius: shape.borderRadiusSecond,
        },
      },
    ],
  },
};

export default ungroupedComponents;
