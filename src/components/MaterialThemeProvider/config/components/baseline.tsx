import { Components } from '@mui/material';

import palette from '@/components/MaterialThemeProvider/config/palette';

const baseline: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      'html, body, #root': {
        flex: 1,
        display: 'flex',

        height: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
      },

      a: {
        textDecoration: 'none',
        color: palette.text.primary,
      },

      '*': {
        margin: 0,
        outline: 0,
        padding: 0,
        boxSizing: 'border-box',
      },

      [`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active
      `]: {
        boxShadow: '0 0 0 30px white inset !important',
      },
    },
  },
};

export default baseline;
