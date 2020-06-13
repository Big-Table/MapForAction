import { createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const defaultTheme = createMuiTheme();

export const BORDER_RADIUS = 10;

export const colorPrimitives = {
  primary: {
    main: "#FF533A",
    light: "#FFEDEA", // "#FFA389"
  },
  secondary: {
    main: "#00878D",
    light: "#E5F2F3",
    // light: "#87C5C5"
  },
  tertiary: {
    main: "#BA9D86",
    light: "#F1EBE6",
  },
  quartiary: {
    main: "#857885",
    light: "#F2F1F2",
  },
  background: {
    alternative: "#F5F5F5",
  },
};
export function primaryRgba(filter) {
  return `rgba(255, 83, 58, ${filter})`;
}

export function secondaryRgba(filter) {
  return `rgba(0, 135, 141, ${filter})`;
}

export function tertiaryRgba(filter) {
  return `rgba(186, 157, 134, ${filter})`;
}

const indicatorCssOverrides = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "transparent",
  "& > div": {
    maxWidth: 120,
    width: "100%",
    backgroundColor: colorPrimitives.primary.main,
  },
};

export const theme = createMuiTheme({
  colors: {
    grey: grey[600],
    border: "rgba(0, 0, 0, 0.23)",
    borderLight: "#F1F1F5",
    borderFocused: "rgba(0, 0, 0, 0.87)",
    inputText: "#92929D",
    imageBackground: "grey",
    tertiary: colorPrimitives.tertiary,
  },
  typography: {
    fontFamily: "Basetica",
    h1: {
      fontWeight: 300,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 300,
      fontSize: "2.1875rem",
    },
    h3: {
      fontWeight: 300,
      fontSize: "1.875rem",
    },
    h4: {
      fontWeight: 300,
      fontSize: "1.75rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      letterSpacing: 0.11,
      // fontSize: 1.25rem by default
      fontWeight: 300,
    },
  },
  palette: {
    primary: colorPrimitives.primary,
    secondary: colorPrimitives.secondary,
    // error: {
    //   main: "#591C14"
    // },
    background: {
      default: "#FAFAFB",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "inset 0 -1px 0 0 #E2E2EA",
        // boxShadow: defaultTheme.shadows[Shadow.APPBAR]
      },
      colorDefault: {
        backgroundColor: defaultTheme.palette.common.white,
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: 627,
      },
    },
    MuiTabs: {
      indicator: indicatorCssOverrides,
      fixed: {
        height: "100%", // Less distance between tab text and selected indicator
      },
    },
    MuiTab: {
      root: {
        minHeight: 36, // Less distance between tab text and selected indicator
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: BORDER_RADIUS,
      },
    },
    MuiButton: {
      outlined: {
        borderWidth: "thin",
      },
    },
  },
});

// declare module "@material-ui/core/styles/createMuiTheme" {
//   interface Theme {
//     colors: {
//       grey: string;
//       border: string;
//       borderLight: string;
//       borderFocused: string;
//       inputText: string;
//       imageBackground: string;
//       tertiary: {
//         main: string;
//         light: string;
//       };
//     };
//   }
//   // allow configuration using `createMuiTheme`
//   interface ThemeOptions {
//     colors?: {
//       grey?: string;
//       border?: string;
//       borderLight: string;
//       borderFocused: string;
//       inputText: string;
//       imageBackground: string;
//       tertiary: {
//         main: string;
//         light: string;
//       };
//     };
//   }
// }
