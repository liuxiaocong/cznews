/**
 * Created by xiaoconglau on 29/03/2017.
 */
const config = require('../config/config.json');
const initialState = {
  name:"config store",
  tabs: config.tabs
};
export default function configs(state = initialState, action) {
  switch (action.type) {
    case "add": {

    }
      break;
    default: {
      return state;
    }
  }

}