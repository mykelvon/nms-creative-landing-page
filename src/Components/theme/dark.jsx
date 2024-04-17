import { createTheme } from "@mui/material";
import { BREAKPOINTS, TYPOGRAPHIES, UIHELPER } from "./themeEnums";
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF4545",
    },

    secondary: {
      main: "#638BCC",
    },
    tertiary: {
      main: "#FF6969",
    },
    quaternary: {
      main: "#DFDFDF",
    },
    info: {
      main: "#00B9ED",
    },
    warning: {
      main: "#FFB83F",
    },
    error: {
      main: "#F96D82",
    },
    success: {
      main: "#78E236",
    },
    neutral: {
      main: "#DFE3E8",
    },
    icon: {
      main: "#486BAF",
    },
    text: {
      main: "#F9FAFB",
    },
    background: {
      default: "#161C24",
      paper: "#212B36",
    },
    white: {
      main: "#FFFFF",
    },
  },

  shadows: Array(25).fill(
    "0px 0px 0px 0px rgba(223, 228, 238, 0.33), 0px 6px 14px 0px rgba(223, 228, 238, 0.32), 0px 25px 25px 0px rgba(223, 228, 238, 0.28), 0px 57px 34px 0px rgba(223, 228, 238, 0.16), 0px 102px 41px 0px rgba(223, 228, 238, 0.05), 0px 159px 44px 0px rgba(223, 228, 238, 0.01)"
  ),
  breakpoints: {
    values: {
      ...BREAKPOINTS,
    },
  },
  props: {
    ...UIHELPER,
  },
  typography: {
    ...TYPOGRAPHIES,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#161C24",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "0px",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        color: "primary",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "uppercase",
          boxShadow: "none",
          padding: "8px 12px",
          "&.MuiButton-containedPrimary": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedPrimary:hover": {
            backgroundColor: "#CC3737",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedSecondary:hover": {
            backgroundColor: "#4F6FA3",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedSecondary": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedSuccess": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedInfo": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedWarning": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedError": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: "#161C24 !important",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          background: "#212B36",
          "&.MuiPaper-elevation1": {
            borderRadius: "20px",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.20), 0px 1px 1px 0px rgba(0, 0, 0, 0.00), 0px 1px 3px 0px rgba(0, 0, 0, 0.00)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation2": {
            borderRadius: "20px",
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation3": {
            borderRadius: "20px",
            boxShadow:
              "0px 3px 3px -2px rgba(0, 0, 0, 0.20), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.00)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation4": {
            borderRadius: "20px",
            boxShadow:
              "0px 2px 4px -1px rgba(0, 0, 0, 0.20), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiSelect-option": {
            "&:hover": {
              borderRadius: "10px",
              color: "#FF4545",
              background: "#FFECEC",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.MuiFormHelperText-root": {
            fontSize: "12px",
            color: "#454F5B",
          },
          "&.MuiFormHelperText-root.Mui-error": {
            fontSize: "12px",
            color: "#D64F70",
          },
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: "laptop",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          background: "rgba(117, 117, 134, 0.10)",
          backdropFilter: "blur(2px)",

          ".MuiDialog-paper": {
            borderRadius: "20px",
            padding: "24px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "@media only screen and (max-width: 900px)": {
              padding: "16px",
            },
          },
          ".MuiDialogContent-root": {
            padding: "15px 15px 0px 0",
            borderBottom: "none",
            borderTop: "none",
          },
          ".MuiDialogActions-root": {
            padding: "15px 0 0 0",
          },
          ".MuiDialogTitle-root": {
            padding: "0px",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        root: {
          "@media only screen and (max-width: 768px)": {
            width: "100%",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root": {
            borderRadius: "10px",

            "& fieldset": {
              borderColor: "#B1C5E6",
            },
            "&:hover fieldset": {
              borderColor: "#4F6FA3",
            },
          },
          "&.MuiOutlinedInput-root.Mui-disabled": {
            color: "#637381",

            "& fieldset": {
              borderColor: "#637381",
            },
          },
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&.MuiFilledInput-root": {
            borderRadius: "10px 10px 0px 0px",
            background: "#324666",
            "&.MuiFilledInput-underline": {
              borderBottom: "1px solid #B1C5E6",
              "&:hover::before": {
                borderColor: "#4F6FA3",
              },
            },
          },
          "&.MuiFilledInput-root.Mui-disabled": {
            color: "#637381",
            background: "#324666",
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          "&.MuiInput-root": {
            // height: "40px",
            "&.MuiInput-underline": {
              borderBottom: "1px solid #B1C5E6",
              "&:hover::before": {
                borderColor: "#4F6FA3",
              },
            },
          },
          "&.MuiInput-root.Mui-disabled": {
            color: "#637381",
          },
        },
      },
    },

    MuiSelect: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
        inputProps: {
          style: {
            padding: "10px",
          },
        },
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          minHeight: "37px",
          gap: "5px",

          "& fieldset": {
            borderColor: "#B1C5E6",
          },
        },
        "&.Mui-disabled": {
          borderRadius: "10px",
          background: "transparent",
          color: "#DFE3E8",

          "& fieldset": {
            borderColor: "#B1C5E6",
          },
          "&:hover fieldset": {
            borderColor: "#4F6FA3",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#B1C5E6",
          },
        },
        "&.Mui-error": {
          "&:hover fieldset": {
            borderColor: "#F73878",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FC8797",
          },
        },
      },
    },

    MuiChip: {
      defaultProps: {
        size: "medium",
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          gap: "5px",
        },
        colorPrimary: {
          borderColor: "#FFE6D9",
          backgroundColor: "#FFE6D9",
          color: "#DB3241",
          "&:hover": {
            background: "#DB3241",
            color: "white",
          },
        },
        colorSuccess: {
          backgroundColor: "#EFFDD6",
          color: "#59C227",
        },
        colorWarning: {
          backgroundColor: "#FFF6D8",
          color: "#DB942E",
        },
        colorInfo: {
          backgroundColor: "#CBFEFA",
          color: "#0090CB",
        },
        colorError: {
          backgroundColor: "#FEE8E2",
          color: "#D64F70",
        },
        outlined: {
          borderColor: "#DB3241",
          color: "#DB3241",
        },
        "&.Mui-disabled": {
          background: "#F4F6F8",
          color: "#C4CDD5",
          "&:hover": {
            background: "#F4F6F9",
          },
        },
        outlinedPrimary: {
          borderColor: "#DB3241",
          color: "#DB3241",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#FF4545",
            backgroundColor: "#FFE6D9",
            color: "#DB3241",
          },
        },
        outlinedSuccess: {
          borderColor: "#59C227",
          color: "#59C227",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#78E236",
            backgroundColor: "#EFFDD6",
          },
        },

        outlinedWarning: {
          borderColor: "#DB942E",
          color: "#DB942E",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#FFB83F",
            backgroundColor: "#FFF6D8",
          },
        },

        outlinedInfo: {
          borderColor: "#0090CB",
          color: "#0090CB",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#00B9ED",
            backgroundColor: "#CBFEFA",
          },
        },

        outlinedError: {
          borderColor: "#D64F70",
          color: "#D64F70",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#F96D82",
            backgroundColor: "#FEE8E2",
          },
        },
      },
    },

    MuiAccordion: {
      defaultProps: {
        size: "small",
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "&.MuiAccordion-root": {
            border: "none",
            borderRadius: "20px",
          },
          "&.MuiAccordion-gutters": {
            "&:before": {
              display: "none",
            },
          },
          ".MuiAccordionSummary-root": {
            padding: "0 24px",
          },
          ".MuiAccordionSummary-expandIconWrapper": {
            color: "#638BCC",
          },
          ".MuiAccordion-region": {
            padding: "0 24px 24px 24px",
          },
        },
        // Add more color variants as needed
      },
    },

    MuiMenu: {
      styleOverrides: {
        root: {
          ".MuiMenu-paper": {
            margin: "8px 0",
          },
          ">.MuiPaper-elevation0": {
            padding: "0 !important",
          },
          ">.MuiPaper-elevation8": {
            padding: "0 !important",
          },
          ".MuiMenu-list": {
            padding: "14px !important",
          },
          ".MuiIcon-root": {
            marginRight: "8px !important",
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.MuiMenuItem-root": {
            padding: "10px",
            "&:hover": {
              borderRadius: "10px",
              backgroundColor: "#F2F5FA",
              color: "#638BCC",
            },
          },
          "&.Mui-selected": {
            borderRadius: "10px",
            backgroundColor: "#F2F5FA",
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          ">.MuiButtonBase-root": {
            "&:hover": {
              borderRadius: "10px",
              backgroundColor: "rgba(242, 245, 250, .5)",
            },
          },
          ".MuiListSubheader-root": {
            backgroundColor: "#FBFBFC",
          },
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            ".MuiListItemIcon-root": {
              color: "#FF4545",
            },
            ".MuiTypography-root": {
              color: "#FF4545",
            },
            color: "red",
            borderRadius: "10px",
            backgroundColor: "#FFECEC",
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          padding: "0",

          "&.MuiTab-labelIcon": {
            gap: "8px !important",
          },
        },
      },
    },

    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",

          ">.MuiPaper-elevation6": {
            backgroundColor: "transparent",
            boxShadow: "none",
            padding: "10px",
          },
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: "center",
          width: "100% !important",

          ".MuiAlert-action": {
            padding: "0",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          ".MuiCardContent-root": {
            padding: "16px !important",
            width: "100%",
          },
          ".MuiCardActions-root": {
            padding: "8px !important",
            width: "100%",
          },
          ">.MuiPaper-elevation1": {
            padding: "0 !important",
            width: "100%",
            height: "fit-content",
          },
        },
      },
    },

    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
      styleOverrides: {
        root: {
          "&.MuiPaper-elevation1": {
            borderRadius: "10px !important",
            padding: "16px",
            backgroundColor: "#212B3",
            color: "#FFF",
          },
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          ".MuiAutocomplete-option": {
            '&[data-focus="true"]': {
              backgroundColor: "#F2F5FA",
            },
            '&[aria-selected="true"]': {
              backgroundColor: "#F2F5FA",
            },
          },

          "@media (max-width: 600px)": {
            width: "100%",
          },
        },
        // Add more color styleOverrides as needed
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          ".MuiSwitch-thumb": {
            boxShadow: "none",
          },
        },
      },
    },

    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: "24px 0px",
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          height: "7px",

          "@media only screen and (max-width: 1600px)": {
            width: "500px",
          },
          "@media only screen and (max-width: 600px)": {
            width: "300px",
          },
          "@media only screen and (max-width: 468px)": {
            width: "200px",
          },
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          width: "100%",

          "& .MuiSlider-valueLabel": {
            backgroundColor: "unset",
            color: "#F9FAFB",
          },
          "& .MuiSlider-thumb": {
            "&:before": {
              boxShadow: "none",
            },
          },
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          padding: 48,
          borderRadius: 20,
          boxShadow:
            "0px 0px 2px 0px rgba(0, 0, 0, 0.20), 0px 12px 24px -4px rgba(0, 0, 0, 0.12)",
          border: "1px solid rgba(145, 158, 171, 0.20)",
          background: "#212B36",
          color: "#FFFFFF",
          gap: 24,
          padding: 48,
          borderRadius: 20,
          boxShadow:
            "0px 0px 2px 0px rgba(0, 0, 0, 0.20), 0px 12px 24px -4px rgba(0, 0, 0, 0.12)",
          border: "1px solid rgba(145, 158, 171, 0.20)",
          background: "#212B36",
          color: "#FFFFFF",
          gap: 24,
          width: "100%",
          "@media (max-width: 600px)": {
            width: 250,
          },
          ".MuiDataGrid-main": {
            border: "none",
            ".MuiDataGrid-columnHeaders": {
              borderColor: "#EEEEEE",
            },
            ".MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus":
              {
                outline: "none",
              },
            ".MuiDataGrid-columnHeaderTitle": {
              fontWeight: "700",
            },
            ".MuiDataGrid-withBorderColor": {
              borderColor: "rgba(145, 158, 171, 0.20)",
              borderColor: "rgba(145, 158, 171, 0.20)",
            },
            ".MuiDataGrid-row:hover": {
              backgroundColor: "#89AEE0",
            },
            ".MuiDataGrid-row:hover": {
              backgroundColor: "#89AEE0",
            },
            ".MuiDataGrid-virtualScrollerContent:last-child, ": {
              border: "none !important",
            },
          },
          ".MuiDataGrid-footerContainer": {
            border: "none",
          },
        },
      },
    },
  },
});
