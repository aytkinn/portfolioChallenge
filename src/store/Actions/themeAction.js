export const SET_THEME = 'SET_THEME';
export const TOGGLE_THEME = 'TOGGLE_THEME';
export const setTheme = (isDarkMode) => ({
    type: SET_THEME,
    payload: isDarkMode,
});
export const toggleTheme = () => ({
    type: TOGGLE_THEME,
});