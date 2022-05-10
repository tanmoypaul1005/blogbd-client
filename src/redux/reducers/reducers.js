import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import DashboardReducer from "./DashboardReducer";
import PostReducer from "./PostReducer";


const reducer = combineReducers({
    auth: AuthReducer,
    post: PostReducer,
    dashboard: DashboardReducer,
})

export default reducer