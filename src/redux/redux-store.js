import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {thunk as thunkMiddleware} from "redux-thunk";

let reducers = combineReducers ({
    profileObj: profileReducer,
    dialogsObj: dialogsReducer,
    sidebar: sidebarReducer,
    usersObj: usersReducer,
    auth: authReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware)); //applyMiddleware- прими промежуточные слои, которые умеют обрабатывать thunk (функции)
window.store = store

export default store