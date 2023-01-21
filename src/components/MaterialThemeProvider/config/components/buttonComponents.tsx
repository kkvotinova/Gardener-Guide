import { Components } from '@mui/material';

import typography from '@/components/MaterialThemeProvider/config/typography';
import palette from '@/components/MaterialThemeProvider/config/palette';

const buttonComponents: Components = {
  MuiButton: {
    variants: [
      {
        props: {
          size: 'small',
        },
        style: {
          height: 30,
          ...typography.buttonSmall,
          minWidth: 'auto',
          whiteSpace: 'nowrap',
        },
      },
    ],
    styleOverrides: {
      root: {
        ...typography.button,

        height: 42,

        color: palette.common.white,

        textTransform: 'none',
        boxShadow: 'none !important',

        '&.Mui-disabled': {
          color: '#cccdd3',
          backgroundColor: '#f5f5f9',
          borderColor: palette.text.disabled,
        },
      },
    },
  },
};

export default buttonComponents;
