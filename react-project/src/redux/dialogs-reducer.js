const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {

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

}

let dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.message;
            let newMessage = {id: 6, message: text, isResponse: true};
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }

}

export let addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message});

export default dialogsReducer;