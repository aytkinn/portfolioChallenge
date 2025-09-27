export const SET_LANG = 'SET_LANG'; 
export const TOGGLE_LANG = 'TOGGLE_LANG';

export const setLang = (lang) => ({
    type: SET_LANG,
    payload: lang,
});
export const toggleLang = () => ({
    type: TOGGLE_LANG,
});