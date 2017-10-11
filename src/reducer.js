import { LOAD_TRANSLATIONS, SET_LOCALE } from './actions';
import { REHYDRATE } from "redux-persist/constants";

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_TRANSLATIONS:
      return {
        ...state,
        translations: action.translations,
      };
    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };

    case REHYDRATE:
      return state;

    default:
      return state;
  }
};
