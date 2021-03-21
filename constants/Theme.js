/*
 * ============================================
 * Main Theme
 * ============================================
 * Description: Handles all the available theming variables
 * for use with Styled Components and ThemeProvider (via Context API)
 * More info: https://www.styled-components.com/docs/advanced#theming
 */

/*
 * ============================================
 * Typography
 * ============================================
 */

const fontLight = `
  font-family: proxima-light;
`;

const fontRegular = `
  font-family: proxima-regular;
`;

const fontSemibold = `
  font-family: proxima-semibold;
`;

const fontBold = `
  font-family: proxima-bold;
`;

const fontBlack = `
  font-family: optician-sans;
`;

/*
 * ============================================
 * Main Defaults
 * ============================================
 * Description: App-wide default variables, consistent with all themes
 */

const defaultTheme = {
    animations: {
        ease: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        speed: '0.3s',
    },
    spacing: {
        bumper: 20,
        s: 10,
        sm: 15,
        m: 35,
        l: 40,
        xl: 64,
        xxl: 80,
    },
    buttons: {
        primary: {
            borderWidth: 1,
            borderStyle: 'solid',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 30,
        },
        outline: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderStyle: 'solid',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 30,
        },
        text: {
            backgroundColor: 'transparent',
            borderWidth: 0,
            padding: 0,
        },
    },
    inputs: {
        full: `
          ${fontSemibold};
          background-color: white;
          padding: 15px 30px;
          border-radius: 30px;
          height: 43px;
          text-align: center;
          font-size: 18px;
          width: 100%;
          shadow-color: black;
          shadow-opacity: 0.1;
          shadow-radius: 4;
          shadow-offset: 0px 4px;
        `,
    },
    variables: {
        borderRadius: 30,
        borderRadiusMedium: 20,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        buttonShadow: {
            // Spread operator
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
        },
    },
    typography: {
        body: `
      ${fontSemibold};
      line-height: 20px;
      font-size: 14px;
    `,
        bodyLarge: `
      ${fontSemibold};
      line-height: 25px;
      font-size: 16px;
    `,
        bodySmall: `
      ${fontRegular};
      font-size: 15px;
    `,
        title: `
      ${fontBold};
      font-size: 25px;
    `,
        header: `
      ${fontBold};
      font-size: 18px;
    `,
        label: `
      ${fontSemibold};
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    `,
        byline: `
      ${fontBold};
      font-size: 12px;
    `,
        badge: `
      ${fontBold};
      font-size: 14px;
    `,
        u1: `
      ${fontRegular};
      font-size: 11px;
      text-transform: uppercase;
    `,
        u2: `
      ${fontRegular};
      font-size: 12px;
    `,
        button: `
      ${fontBlack};
      font-size: 20px;
    `,
    },
};

/*
 * ============================================
 * Default Colors
 * ============================================
 * Description: These colors are consistent on all themes
 */

const defaultColors = {
    white: '#FFFFFF',
    black: '#000000',
    base: '#FFFFFF',
    baseSecondary: '#F2F0F5',
    baseTertiary: '#C2BFC8',
    baseQuaternary: '#FFFFFF',
    baseContrast: '#000000',
    gray: '#C4C4C4',
    grayDark: '#868686',
};

/*
 * ============================================
 * Themes
 * ============================================
 * Description: This model is required to switch between themes dynamically with ThemeProvider
 * https://www.styled-components.com/docs/advanced#theming
 * Primary: Main accent color of the theme
 * Primary RGB: Used for elements that have transparency
 * Constrast: Contrasting color for text/other elements appearing over the primary color
 */

export default {
    light: {
        ...defaultTheme,
        colors: {
            ...defaultColors,
            primary: '#FF6F6F',
            primaryRGB: '227, 89, 88',
            primaryContrast: '#FFFFFF',
            primaryLightContrast: '#FF8483',
            secondary: '#E65959',
            secondaryRGB: '78, 88, 180',
            secondaryContrast: '#FFFFFF',
            secondaryLightContrast: '#727DE8',
        },
    },
    dark: {
        ...defaultTheme,
        colors: {
            ...defaultColors,
            base: '#000000',
            baseContrast: '#FFFFFF',
            baseSecondary: '#222222',
            baseTertiary: '#505050',
            baseQuaternary: '#505050',
            primary: '#E35958',
            primaryRGB: '227, 89, 88',
            primaryContrast: '#FFFFFF',
            primaryLightContrast: '#FF8483',
            secondary: '#4E58B4',
            secondaryRGB: '78, 88, 180',
            secondaryContrast: '#FFFFFF',
            secondaryLightContrast: '#A1ABFF',
        },
    },
};
