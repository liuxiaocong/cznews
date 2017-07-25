/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { combineReducers } from 'redux'
import newsReduces from "./newsReduces"
import navReduces from "./navReduces"


const app = combineReducers({
  newsStore: newsReduces,
  nav: navReduces
})

export default app