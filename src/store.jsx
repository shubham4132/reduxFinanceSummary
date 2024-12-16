import { createStore } from "redux";
import FinanceReducer from "./FinanceReducer";
const store = createStore(FinanceReducer);
export default store;
