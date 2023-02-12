export const Colors = {
  // Primary
  lightForest: "#f2f7f5",
  forest: "#00473e",
  darkForest: "#00332c",
  juniper: "#475d5b",
  fire: "#faae2b",
  flamingo: "#ffa8ba",
  persianRed: "#fa5246",

  // Neutrals
  white: "#fffffe",
  offWhite: "#f2f7f5",

  // Remove
  lightGrey: "#e1dfdc",
  lighterGrey: "#B8B4AD",
  midGrey: "#9d988e",
  grey: "#6b665d",
  darkGrey: "#403d38",
  charcoal: "#333",
  black: "#000",
};

export const theme = {
  colors: Colors,
  fonts: {
    mono: "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",
    display: "Playfair Display, serif",
    serif: "Merriweather, serif",
  },
  sizes: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "2rem",
    xlg: "3rem",
    xxlg: "5rem",
  },
  breakpoints: {
    xs: 320,
    sm: 425,
    md: 768,
    lg: 1024,
    xlg: 1440,
  },
  spacers: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xlg: "3rem",
    xxlg: "5rem",
  },
  borderRadius: {
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
  },
  layout: {
    maxWidthXlg: "100rem",
    maxWidthLg: "80rem",
    maxWidthSm: "60rem",
  },
  lightTheme: {
    background: Colors.lightForest,
    body: Colors.juniper,
    heading: Colors.forest,
    lightBody: Colors.juniper,
    emphasisBody: Colors.darkForest,
    cardBackground: Colors.white,
    cardBorder: Colors.forest,
    secondary: Colors.fire,
    accent: Colors.flamingo,
    secondaryAccent: Colors.persianRed,
    link: Colors.fire,
  },
  darkTheme: {
    background: Colors.forest,
    body: Colors.white,
  },
  animation: {
    duration: '0.3s',
    easing: 'ease-in-out',
  }
};
