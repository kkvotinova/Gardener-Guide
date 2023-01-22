import { Components } from '@mui/material';

const dialogComponents: Components = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        padding: 0,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        padding: '16px 16px 16px 24px',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        marginTop: 16,
        marginLeft: -16,
        marginRight: -16,

        borderWidth: 0,
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderColor: '#EAEEF1',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: 16,
        paddingBottom: 0,
        paddingTop: '16px !important',
      },
    },
  },
};

export default dialogComponents;
