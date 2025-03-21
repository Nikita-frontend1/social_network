import { AuthAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'


let initialState = {
    id : null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data, // перезатерает то, что лежит в state (т.к. находится ниже)
                isAuth: true
                }
            
        default:
            return state;
    }


}

export const setAuthUserData = (id, email, login ) => ({ type: SET_USER_DATA, data: { id, email, login } })
export const getAuthUserData = () => (dispatch) => {
    AuthAPI.getAuth().then (response => { 

       if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data //Деструктуризация - присваеваем объект нескольким переменным
         dispatch(setAuthUserData(id, email, login));
       }
    });}

export default authReducer;