import { createStore } from "redux";
import ComReducer from "./rootReducers/mainReducer";

const store = createStore(ComReducer)

export default store