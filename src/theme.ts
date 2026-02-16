import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800', // Orange for primary actions like "Apply"
    },
    secondary: {
      main: '#4caf50', // Green for success/status
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    subtitle1: {
      fontWeight: 500,
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

export default theme;
