const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
        dialogsData: [
            {id: 1, name: 'Kostya'},
            {id: 2, name: 'Katya'},
            {id: 3, name: 'Sonya'},
            {id: 4, name: 'Igor'},
            {id: 5, name: 'Andrey'},
            {id: 6, name: 'Julia'}
        ],
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'This is my project'},
            {id: 4, message: 'React'},
            {id: 5, message: 'User'}
        ],
        newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_MESSAGE:{
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id:6, message: newMessage}]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        default: 
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
}

export default dialogsReducer;