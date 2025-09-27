import { SET_LANG, TOGGLE_LANG } from "../Actions/langAction";
const initialState = {
    currentLang: "en",
    availableLangs: ["en","tr"],
};
const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                currentLang: action.payload,
            }
            case TOGGLE_LANG:
                return {
                    ...state,
                    currentLang: state.currentLang==="en"? "tr":"en"
                }
                default:
                    return state;
    }
}
export default langReducer;