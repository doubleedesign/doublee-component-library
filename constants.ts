import theme from './theme.json';

export const ThemeColours = Object.freeze(theme.colours);
export type ThemeColourValue = typeof theme.colours[keyof typeof ThemeColours];
export type ThemeColourName = keyof typeof theme.colours;
export type ThemeColour = ThemeColourName | ThemeColourValue;
