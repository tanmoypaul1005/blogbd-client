import axios from "axios";

import axiosIntance from "../../helpers/axiosIntance";
import { postConstants } from "../constants"


export const createAction = (postdata) => {
    return async (dispatch) => {
        try {
            dispatch({ type: postConstants.POST_REQUEST });
            const res = await axiosIntance.post('/create_post', postdata);
            // console.log("PostRes", res);

            if (res.status === 200) {
                dispatch({ type: postConstants.POST_SUCCESS });
            }
            const { errors } = res.data;
            if (res.status === 500) {
                dispatch({ type: postConstants.POST_FAILURE, payload: errors });
            }
            const { data: msg } = res
            dispatch({ type: postConstants.SET_MESSAGE, payload: msg });

        } catch (error) {
            console.log(error);
            dispatch({ type: postConstants.POST_FAILURE });
            // const { errors } = error.res.data;
            dispatch({ type: postConstants.POST_CREATE_ERROR });
        }
    }
}




export const fetch = (email) => {
    return async (dispatch) => {
        try {
            dispatch({ type: postConstants.GET_POST_REQUEST });
            const res = await axiosIntance.post('user/post', { email });
            // console.log("PostRes", res);
            const { post } = res.data;
            if (res.status === 200) {
                dispatch({ type: postConstants.GET_POST_SUCCESS, payload: post });
            }
            if (res.status === 500) {
                dispatch({ type: postConstants.GET_POST_FAILURE });
            }

        } catch (error) { console.log(error) }
    }
}


export const detail_post = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: postConstants.GET_POST_DETAIL_REQUEST });
            const res = await axiosIntance.post(`/details/:${id}`, { id });
            console.log("PostRes", res);
            const { postDetail } = res.data;
            // console.log("postDetailcomments", postDetail.comments);
            if (res.status === 201) {
                dispatch({ type: postConstants.GET_POST_DETAIL_SUCCESS, comments: postDetail.comments, payload: postDetail });
            }
            if (res.status === 500) {
                dispatch({ type: postConstants.GET_POST_DETAIL_FAILURE });
            }
        } catch (error) {
            console.log(error);

        }
    }
}



export const postComment = (commentData) => {

    return async (dispatch) => {
        try {
            dispatch({ type: postConstants.POST_COMMENT_REQUEST });
            const res = await axiosIntance.post('/comment', { commentData });
            // console.log("PostRes", res);

            if (res.status === 200) {
                dispatch({ type: postConstants.GET_POST_DETAIL_SUCCESS });
            }

            if (res.status === 500) {
                dispatch({ type: postConstants.GET_POST_DETAIL_FAILURE });
            }
        } catch (error) { console.log(error); }
    }
}



export const postDelete = (id) => {

    return async (dispatch) => {
        try {
            dispatch({ type: postConstants.POST_DELETE_REQUEST });
            const res = await axiosIntance.post('/post/delete', { id });

            if (res.status === 200) {
                dispatch({ type: postConstants.POST_DELETE_SUCCESS });
            }
            if (res.status === 500) {
                dispatch({ type: postConstants.POST_DELETE_FAILURE });
            }

        } catch (error) { console.log(error) }
    }
}




export const editPost = (data, id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: postConstants.POST_EDIT_REQUEST });
            const res = await axiosIntance.post(`/post/edit/${id}`, { data }, { id });
            // console.log("EDITPost", res);

            if (res.status === 200) {
                dispatch({ type: postConstants.POST_EDIT_SUCCESS });
            }

            if (res.status === 500) {
                dispatch({ type: postConstants.POST_EDIT_FAILURE });
            }

        } catch (error) { console.log(error) }
    }
}


export const editPostData = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: postConstants.POST_EDITDATA_REQUEST });
            const res = await axiosIntance.post(`/post/edit/${id}`, { id });
            console.log("EDITPost", res);

            if (res.status === 201) {
                const { postDetail } = res.data
                dispatch({ type: postConstants.POST_EDITDATA_SUCCESS, payload: postDetail });
            }

            if (res.status === 501) {
                dispatch({ type: postConstants.POST_EDITDATA_FAILURE });
            }

        } catch (error) { console.log(error) }
    }
}

