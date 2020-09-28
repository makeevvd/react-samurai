import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {INITIALIZE} from "redux-form/lib/actionTypes";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export let initializeSuccess = () => ({type: INITIALIZE_SUCCESS});


export let initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializeSuccess());
}




export default appReducer;