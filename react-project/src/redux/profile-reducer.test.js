import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let state = {

    posts: [
        {id: 1, message: "Coldplay", likesCount: 15},
        {id: 2, message: "Hotel California", likesCount: 12}
    ],
    profile: null,
    status: '',
}


test('Post', () => {
    let action = addPostActionCreator('vladmakeev');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3)
})

test('Post', () => {
    let action = addPostActionCreator('vladmakeev');

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('vladmakeev')
})

test('Post deleted', () => {
    let action = deletePostActionCreator(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1)
})



export default profileReducer;