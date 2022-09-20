import {
    SEARCH_SHOWS,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW
} from '../Types';

const ShowsReducer = (state, action) => {
  switch(action.type) {
    case SEARCH_SHOWS:
        return {
            ...state,
            shows: action.payload
        }
    case SET_SINGLE_SHOW:
        return {
            ...state,
            singleShow: action.payload
        }
    case CLEAR_SINGLE_SHOW:
        return {
            ...state,
            singleShow: {}
        }
    default:
        return state;
  }
}

export default ShowsReducer