import { userAPI } from "../api/api"

const ADD_POST= 'ADD-POST'
const UP_NEW_POST_TEXT = 'UP-NEW-POST-TEXT' 
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likes: 25 },
        { id: 2, message: "It's my first post", likes: 10 },
    ],
    newPostText: 'Hello',
    profile: null,

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            likes: 0
        };

        return {
            ...state,
            postsData: [...state.postsData, newPost],   //пушим новый элемент в state и создали копию
            newPostText: ''  // занулили после добавления поста
        };

        case UP_NEW_POST_TEXT: 
        return {
            ...state,
            newPostText: action.newText
        }

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        
       default:
        return state;
    }
      
   
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const upNewPostTextActionCreator = (text) => ({type: UP_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => {
    return (dispatch) => {

    userAPI.getProfile(userId).then (response => {   
        
         dispatch(setUserProfile (response.data)); 
    });

 }
}


export default profileReducer;