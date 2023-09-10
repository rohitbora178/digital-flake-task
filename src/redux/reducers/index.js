// reducers/index.js
import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productReducer";

const rootReducer = combineReducers({
  category : categoryReducer,
  modal: modalReducer,
  products : productsReducer
});

export default rootReducer;
