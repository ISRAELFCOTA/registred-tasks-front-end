import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    type: "dark" | "light";
    colors: {
      main: string;
      lightMain: string;
      secondaty: string;
      mainContrast: string;
      background: string;
      backgroundAlt: string;
      backgroundDark: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
      buttonTextColor: string;
      buttonBackground: string;
      buttonBackgroundHover: string;
      buttonBackgroundActive: string;
      modalBackgroundColor: string;
      modalContentBackgroundColor: string;
      modalBorderColor: string;
    };
  }
}
