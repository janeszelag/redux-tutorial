import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

//initial state is passed as a default parameter.
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    // I think rather than use object.assign i can use the spread .... thing
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
