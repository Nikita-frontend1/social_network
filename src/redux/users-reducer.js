import { userAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users : [],
    pageSize: 5,
    totalUsersCount : 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: action.users }
        }
        
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count }
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state, 
                followingInProgress: action.followingInProgress
                 ? [...state.followingInProgress, action.userId] // тернарное выражение
                 : state.followingInProgress.filter(id => id != action.userId)} //фильтрация вернет копию массива
        }

        default:
            return state;
    }


}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})

export const getUsersThunkCreator = (currentPage, pageSize ) => {
   return (dispatch) => {

     dispatch(toggleIsFetching (true)) 
    
           userAPI.getUsers(currentPage, pageSize ).then (data => {  

            dispatch(setCurrentPage (currentPage))
            dispatch(toggleIsFetching (false)) 
            dispatch(setUsers (data.items));   //взяли data.items через метод this продебажив сайт, что пришло в response
            dispatch(setTotalUsersCount (data.totalCount))

            });
 }
}

export const follow = (userId) => {
    return (dispatch) =>  { 
        dispatch(toggleIsFollowingProgress(true, userId))
                              
         userAPI.getFollow(userId).then (response => {  
        
        if (response.data.resultCode === 0) {
            dispatch(followAC(userId)) 
        }

        dispatch(toggleIsFollowingProgress(false, userId))
    });

  } 
}

export const unfollow = (userId) => {
    return (dispatch) =>  { 
        dispatch(toggleIsFollowingProgress(true, userId))
                              
         userAPI.getUnfollow(userId).then (response => {  
        
        if (response.data.resultCode === 0) {
            dispatch(unfollowAC(userId)) 
        }

        dispatch(toggleIsFollowingProgress(false, userId))
    });

  } 
}
export default usersReducer;

