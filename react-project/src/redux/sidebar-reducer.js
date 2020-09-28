let initialState = {

        friends: [
            {id: 1, name: "Dimych", profileImg: 'https://bit.ly/3fX9bw5'},
            {id: 2, name: "Andrey", profileImg: 'https://bit.ly/3fX9bw5'},
            {id: 3, name: "Sveta", profileImg: 'https://bit.ly/3fX9bw5'},
        ]

};

let sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;