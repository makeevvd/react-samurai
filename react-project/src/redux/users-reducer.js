import {usersAPI} from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const GET_TOTAL_USERS = 'GET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
    ],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    } else {
                        return u;
                    }
                })
            }

        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNum}

        case GET_TOTAL_USERS:
            return {...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return action.isFetching ?
                {...state, followingInProgress: [...state.followingInProgress, action.userId]} :
                {...state, followingInProgress: state.followingInProgress.filter(id => id != action.userId)}

        default:
            return state;
    }
}

export let requestUsers = (pageNum, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(pageNum, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(getTotalUsers(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
    dispatch(toggleFollowingProgress(userId, true));
    let data = await apiMethod(userId)
    if (data.resultCode == 0) {
        dispatch(toggleFollow(userId))
    }
    dispatch(toggleFollowingProgress(userId, false))
}

export let follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI))
}

export let unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI))
}





export let toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId});
export let setUsers = (users) => ({type: SET_USERS, users});
export let getTotalUsers = (totalCount) => ({type: GET_TOTAL_USERS, count: totalCount});
export let setCurrentPage = (pageNum) => ({type: SET_CURRENT_PAGE, pageNum});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let toggleFollowingProgress = (userId, isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, userId, isFetching})


export default usersReducer;