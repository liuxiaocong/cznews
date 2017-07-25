/**
 * Created by xiaoconglau on 29/03/2017.
 */
const initialState = {
  newsSource: ["aa", "bb"],
  newsMap: {},
  newsCount: 0
};
export default function news(state = initialState, action) {
  switch (action.type) {
    case "add": {
      let count = state.newsCount + 1;
      return {
        ...state,
        newsCount: count
      };
    }
      break;
    default: {
      return state;
    }
  }

}