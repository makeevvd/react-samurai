import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {

    posts: [
        {id: 1, message: "Coldplay", likesCount: 15},
        {id: 2, message: "Hotel California", likesCount: 12}
    ],
    profile: null,
    status: '',
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {id: 3, message: action.postText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter( p => p.id != action.postId)
            }

        default:
            return state;
    }
}

export let addPostActionCreator = (postText) => ({type: ADD_POST, postText});
export let deletePostActionCreator = (postId) => ({type: DELETE_POST, postId});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setStatus = (status) => ({type: SET_STATUS, status});


export let getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(data));
}

export let getStatus = (userId) => async (dispatch) => {
    let status = await profileAPI.getStatus(userId)
        dispatch(setStatus(status));
}

export let updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}



export default profileReducer;