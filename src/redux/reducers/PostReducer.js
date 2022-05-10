import { postConstants } from "../constants";

const initState = {
    loading: false,
    createErrors: [],
    redirect: false,
    message: '',
    posts: [],
    perPage: 0,
    count: 0,
    post: {
        title: '',
        author: '',
        body: '',
        image: '',
        description: '',
        slug: '',
        email: '',
        userId: '',
        updatedAt: ''
    },
    postStatus: false,
    editErrors: [],
    updateImageErrors: [],
    details: {
        title: '',
        author: '',
        body: '',
        image: '',
        description: '',
        slug: '',
        email: '',
        userId: '',
        updatedAt: ''
    },
    comments: {},
    editdata: {}
};


const PostReducer = (state = initState, action) => {
    switch (action.type) {
        case postConstants.POST_REQUEST:
            state = { ...state }
            break;
        case postConstants.POST_SUCCESS:
            state = { ...state }
            break;

        case postConstants.POST_FAILURE:
            state = { ...state }
            break;

        case postConstants.SET_MESSAGE:
            state = { ...state, message: action.payload };
            break;

        case postConstants.POST_CREATE_ERROR:
            state = { ...state, createErrors: action.payload };
            break;





        case postConstants.GET_POST_REQUEST:
            state = { ...state }
            break;

        case postConstants.GET_POST_SUCCESS:
            state = { ...state, post: action.payload }
            break;

        case postConstants.GET_POST_FAILURE:
            state = { ...state }
            break;






        case postConstants.GET_POST_DETAIL_REQUEST:
            state = { ...state }
            break;

        case postConstants.GET_POST_DETAIL_SUCCESS:
            state = { ...state, details: action.payload, comments: action.comments }
            break;

        case postConstants.GET_POST_DETAIL_FAILURE:
            state = { ...state }
            break;






        case postConstants.POST_COMMENT_REQUEST:
            state = { ...state }
            break;

        case postConstants.POST_COMMENT_SUCCESS:
            state = { ...state }
            break;

        case postConstants.POST_COMMENT_FAILURE:
            state = { ...state }
            break;






        case postConstants.POST_DELETE_REQUEST:
            state = { ...state }
            break;

        case postConstants.POST_DELETE_SUCCESS:
            state = { ...state }
            break;

        case postConstants.POST_DELETE_FAILURE:
            state = { ...state }
            break;

        case postConstants.POST_EDIT_REQUEST:
            state = { ...state }
            break;

        case postConstants.POST_EDIT_SUCCESS:
            state = { ...state }
            break;

        case postConstants.POST_EDIT_FAILURE:
            state = { ...state }
            break;



        case postConstants.POST_EDITDATA_REQUEST:
            state = { ...state }
            break;

        case postConstants.POST_EDITDATA_SUCCESS:
            state = { ...state, editdata: action.payload }
            break;

        case postConstants.POST_EDITDATA_FAILURE:
            state = { ...state }
            break;
    }
    return state;
}
export default PostReducer;