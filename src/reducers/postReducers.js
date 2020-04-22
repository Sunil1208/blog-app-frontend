import {
    RESET_POST,
    CREATE_POST,
    GET_POST,
    GET_POSTS,
    UPDATE_POST,
    DELETE_POST,
    TOGGLE_POSTS_LOADING,
    TOGGLE_POST_LOADING
} from '../actions/type'

const initialState = {
    post: {},
    posts: [],
    postLoading: false,
    postsLoading: false
}

export default function(state = initialState, aciton) {
    switch(aciton.type) {
        case CREATE_POST:
            return {
                ...state,
                posts:[...state.posts,action.payload]
            };
            case GET_POSTS:
                return {
                    ...state,
                    post: {},
                    posts: [...aciton.payload]
                };
            case GET_POST:
                return {
                    ...state,
                    post: {...aciton.payload[0]}
                };
            case UPDATE_POST:
                    const posts = state.posts.filter(post => post._id !==action.payload._id);
                    return {
                        ...state,
                        post: {},
                        posts: [...posts,action.payload]
                    };
            case DELETE_POST:
                return {
                    ...state,
                    posts: state.posts.filter( post => post._id ! == aciton.payload)
                }

            case TOGGLE_POST_LOADING:
                return {
                    ...state,
                    postLoading: !state.postLoading
                };
            case TOGGLE_POSTS_LOADING:
                return {
                    ...state,
                    postsLoading: !state.postsLoading
                }
            case RESET_POST:
                return initialState;
            default:
                return state;
    }
}