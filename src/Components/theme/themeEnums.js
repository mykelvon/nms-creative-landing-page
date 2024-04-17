export const BREAKPOINTS = Object.freeze({
    mobile: 0, //xs
    tablet: 600, //sm
    laptop: 900, //md
    desktop: 1200, //lg
    largeDesktop: 1600, //xl
  });
  
  export const UIHELPER = Object.freeze({
    topBarHeight: "60px",
    drawerWidth: "248px",
    drawerWidthOpen: "45px",
    backgroundColor: "transparent",
  });
  
  export const TYPOGRAPHIES = Object.freeze({
    fontFamily: ["Lato"].join(","),
    at: {
      fontSize: 18,
      color: "#000",
      fontStyle: "bold",
    },
    h1: {
      fontWeight: 800,
      lineHeight: "80px",
      fontSize: "64px",
      "@media only screen and (max-width: 900px)": {
        lineHeight: "50px",
        fontSize: "40px",
      }
    },
    h2: {
      fontWeight: 800,
      lineHeight: "64px",
      fontSize: "48px",
      "@media only screen and (max-width: 900px)": {
        lineHeight: "36px",
        fontSize: "24px",
      }
    },
    h3: {
      fontWeight: 700,
      lineHeight: "48px",
      fontSize: "32px",
    },
    h4: {
      fontWeight: 700,
      lineHeight: "36px",
      fontSize: "24px",
      "@media only screen and (max-width: 900px)": {
        lineHeight: "30px",
        fontSize: "20px",
      }
    },
    h5: {
      fontWeight: 700,
      lineHeight: "30px",
      fontSize: "20px",
    },
    h6: {
      fontWeight: 700,
      lineHeight: "28px",
      fontSize: "18px",
     
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: "24px",
      fontSize: "16px",
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: "22px",
      fontSize: "14px",
      
    },
    subtitle3: {
      fontWeight: 700,
      lineHeight: "36px",
      fontSize: "24px",
    },
    body1: {
      lineHeight: "24px",
      fontSize: "16px",
      "@media only screen and (max-width: 900px)": {
        fontSize: "14px",
        lineHeight: "22px",
      }
    },
    body2: {
      lineHeight: "22px",
      fontSize: "14px",
    },
    body3: {
      fontWeight: 400,
      lineHeight: "36px",
      fontSize: "20px",
    },
    small: {
      fontSize: "10px",
      fontWeight: 600,
      lineHeight: "0",
      textAlign: "center",
    },
    caption: {
      fontWeight: 400,
      lineHeight: "24px",
      fontSize: "16px",
    },
    overline: {
      fontWeight: 400,
      lineHeight: "24px",
      fontSize: "16px",
      textTransform: "uppercase",
    },
    buttonLarge: {
      fontWeight: 700,
      lineHeight: "26px",
      fontSize: "15px",
      textTransform: "uppercase",
    },
    buttonMedium: {
      fontWeight: 700,
      lineHeight: "24px",
      fontSize: "14px",
      textTransform: "uppercase",
    },
    buttonSmall: {
      fontWeight: 700,
      lineHeight: "22px",
      fontSize: "13px",
      textTransform: "uppercase",
    },
    
  });
  