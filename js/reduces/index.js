/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { combineReducers } from 'redux'
import newsReduces from "./newsReduces"
import navReduces from "./navReduces"
import configReduces from "./configReduces"


const app = combineReducers({
  newsStore: newsReduces,
  navStore: navReduces,
  configStore: configReduces
})

export default app