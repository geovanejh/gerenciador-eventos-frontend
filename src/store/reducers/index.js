import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import UtilsReducer from "./UtilsReducer";
import PurchaseReducer from "./PurchaseReducer";

export default combineReducers({
  AuthReducer,
  UtilsReducer,
  PurchaseReducer,
});
