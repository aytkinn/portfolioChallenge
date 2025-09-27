import { TOGGLE_THEME, SET_THEME } from '../Actions/themeAction'

const initialState = {
  isDarkMode: false
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      }
    
    case SET_THEME:
      return {
        ...state,
        isDarkMode: action.payload
      }
    
    default:
      return state
  }
}

export default themeReducer;