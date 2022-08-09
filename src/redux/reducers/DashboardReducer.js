import { dashboardConstants } from "../constants";

const initState = {
    dashboard: {}
}
const DashboardReducer = (state = initState, action) => {
    switch (action.type) {
        case dashboardConstants.GET_DASHBOARD_REQUEST:
            state = { ...state }
            break;

        case dashboardConstants.GET_DASHBOARD_SUCCESS:
            state = { ...state, dashboard: action.payload }
            break;

        case dashboardConstants.GET_DASHBOARD_FAILURE:
            state = { ...state }
            break;
    }
    return state;
}
export default DashboardReducer;
