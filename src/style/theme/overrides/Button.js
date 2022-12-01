// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
      
          border: `1px solid ${theme.palette.primary.main}`,
          color: "white",
          "&:hover": {
            background: "#fff",
            color: theme.palette.primary.main,
            transition: "all 500ms ease",
            border: `1px solid ${theme.palette.primary.main}`,
          },
        },
        containedSecondary: {
         
        },
        containedInfo: {
      
        },
        containedSuccess: {
         
        },
        containedWarning: {
         
        },
        containedError: {
       
          border: `1px solid ${theme.palette.error.main}`,
          color: "white",
          "&:hover": {
            background: "#fff",
            color: theme.palette.error.main,
            transition: "all 500ms ease",
            border: `1px solid ${theme.palette.error.main}`,
          },
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
