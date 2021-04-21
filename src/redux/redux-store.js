import { combineReducers, createStore } from "redux";
import messagesReducer from "./messsages-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;