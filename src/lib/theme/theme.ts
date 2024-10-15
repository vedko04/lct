import { BREAKPOINTS, COLORS, RADIUSES, SPACINGS } from './constants';

export const theme = {
  colors: {
    base: {
      primary: COLORS.BASE_COLORS.PRIMARY,
      acent: COLORS.BASE_COLORS.ACENT,
      secondary: COLORS.BASE_COLORS.SECONDARY,
      grey: {
        100: COLORS.BASE_COLORS.GREY[100],
        200: COLORS.BASE_COLORS.GREY[200],
        300: COLORS.BASE_COLORS.GREY[300],
        350: COLORS.BASE_COLORS.GREY[350],
        400: COLORS.BASE_COLORS.GREY[400],
        700: COLORS.BASE_COLORS.GREY[700],
        800: COLORS.BASE_COLORS.GREY[800],
        900: COLORS.BASE_COLORS.GREY[900]
      },
      light: COLORS.BASE_COLORS.LIGHT,
      dark: COLORS.BASE_COLORS.DARK,
      background: COLORS.BASE_COLORS.BACKGROUND
    },
    additional: {
      brand_blue: COLORS.ADDITIONAL_COLORS.BRAND_BLUE,
      brand_light_blue: COLORS.ADDITIONAL_COLORS.BRAND_LIGHT_BLUE
    },
    focus: COLORS.ADDITIONAL_COLORS.FOCUS
  },
  spacings: {
    x4: SPACINGS.X4,
    x8: SPACINGS.X8,
    x12: SPACINGS.X12,
    x16: SPACINGS.X16,
    x20: SPACINGS.X20,
    x24: SPACINGS.X24,
    x28: SPACINGS.X28,
    x32: SPACINGS.X32,
    x36: SPACINGS.X36,
    x40: SPACINGS.X40,
    x44: SPACINGS.X44,
    x48: SPACINGS.X48,
    x60: SPACINGS.X60,
    x64: SPACINGS.X64,
    x128: SPACINGS.X128
  },
  radiuses: {
    sm: RADIUSES.SMALL,
    df: RADIUSES.DEFAULT,
    md: RADIUSES.MEDIUM
  },
  breakpoints: {
    mobile: BREAKPOINTS.MOBILE,
    mobile_small: BREAKPOINTS.MOBILE_SM
  }
};
