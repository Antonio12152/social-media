import { combineReducers, createStore } from "redux";
import chatReducer from "./reducers/chatReducer";
import homeReducer from "./reducers/homeReducer";
import profileReducer from "./reducers/profileReducers";

const reducers = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    home: homeReducer
})
const store = createStore(reducers)
window.store = store
export default store