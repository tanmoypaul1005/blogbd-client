import axiosIntance from "../../helpers/axiosIntance";
import { dashboardConstants } from "../constants"

export const fetchDashboard = () => {

    return async (dispatch) => {
        dispatch({ type: dashboardConstants.GET_DASHBOARD_REQUEST });
        const res = await axiosIntance.get('post');
        // console.log("fetchDashboard", res);

        if (res.status === 200) {
            const { post } = res.data;
            dispatch({ type: dashboardConstants.GET_DASHBOARD_SUCCESS, payload: post });

        }
        if (res.status === 500) {
            dispatch({ type: dashboardConstants.GET_DASHBOARD_FAILURE });
        }
    }
}