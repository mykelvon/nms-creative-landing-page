import React, { useMemo } from 'react';
import { useTheme } from '@mui/material';


export const useStyles = () => {
  const theme = useTheme();

  const classes = useMemo(() => {
    return {
      global: {
        html: {
          'MsOverflowStyle': '-ms-autohiding-scrollbar',
          '--scrollbarBG': 'transparent',
          '--thumbBG': theme.palette.primary.main,
        },
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--thumbBG) var(--scrollbarBG)'
        },
        '*::-webkit-scrollbar-track': {
          background: 'var(--scrollbarBG)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--thumbBG)',
          borderRadius: '6px',
          border: `3px solid ${theme.palette.background.default}`
        },
        '*::-webkit-scrollbar': {
          width: '11px'
        },
      },
      sideBarList: {
        '.MuiListSubheader-root': {
          backgroundColor: 'transparent',
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '150%',
          letterSpacing: '0.15px',
          color: theme.props.contrastText,
          paddingLeft: '0px',
          width: '235px',
          height: '35px',
          margin: '8px 0 4px 10px',

        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      subheadDivider: {
        marginY: '23px',
      },
      sideNavNested: {
        '.Mui-selected': {
          backgroundColor: 'transparent !important',
          color: 'red !important',
          'MuiListItem-button': {
            backgroundColor: 'transparent !important',
          },
          '.MuiTypography-root': {
            color: theme.palette.primary.main
          },

        },
      },
      topBar: {
        backgroundColor: theme.palette.background.paper,
        height: theme.props.topBarHeight
      },
      flexCentered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    };
  }, [theme]);
  return {
    classes
  };
};