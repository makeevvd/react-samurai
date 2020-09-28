import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}


export let setUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}});



export let getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me();

            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserData(id, login, email, true));
            }
}

export let login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);

            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
               let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
}

export let logout = () => async (dispatch) => {

    let data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}


export default authReducer;