import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych", profileImg: 'https://bit.ly/3fX9bw5'},
                {id: 2, name: "Andrey", profileImg: 'https://bit.ly/3fX9bw5'},
                {id: 3, name: "Sveta", profileImg: 'https://bit.ly/3fX9bw5'},
                {id: 4, name: "Sasha", profileImg: 'https://bit.ly/3fX9bw5'},
                {id: 5, name: "Victor", profileImg: 'https://bit.ly/3fX9bw5'},
                {id: 6, name: "Valery", profileImg: 'https://bit.ly/3fX9bw5'},
            ],
            messages: [
                {id: 1, message: "hi", isResponse: true},
                {id: 2, message: "How is your it-kamasutra?", isResponse: false},
                {id: 3, message: "Yo", isResponse: false},
                {id: 4, message: "What's up?", isResponse: true},
                {id: 5, message: "Miss u", isResponse: true},
            ],
            newMessageText: '',
        },
        profilePage: {
            posts: [
                {id: 1, message: "Coldplay", likesCount: 15},
                {id: 2, message: "Hotel California", likesCount: 12}
            ],
            newPostText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: "Dimych", profileImg: 'https://bit.ly/3fX9bw5'},
                {id: 2, name: "Andrey", profileImg: 'https://bit.ly/3fX9bw5'},
                {id: 3, name: "Sveta", profileImg: 'https://bit.ly/3fX9bw5'},
            ]
        },
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}





// store.updatePostText.bind(store);
// store.updateMessageText.bind(store);

for (let key in store) {
    if (typeof store[key] == 'function') {
        store[key] = store[key].bind(store);
    }
}

window.state = store.state;


export default store;