const UP_NEW_MESSAGE = 'UP-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Vanya' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Maks' },
        { id: 5, name: 'Valera' },
    ],

    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: "I'm okay" },

    ],

    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {

        case SEND_MESSAGE:

            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 4, message: body }]
            };
            
        case UP_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newTextM
            };

        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const upNewTextMCreator = (text) =>
    ({ type: UP_NEW_MESSAGE, newTextM: text })

export default dialogsReducer;