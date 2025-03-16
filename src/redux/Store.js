import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

const store = { 
    
    _state: {
        profileObj: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likes: 25 },
                { id: 2, message: "It's my first post", likes: 10 },
            ],
            newPostText: 'Hello'
        },
        dialogsObj: {
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
        },
        sidebar: {

        }
    
    },

    _callSubscriber ()  {
        console.log('State changed')
    },

    getState () {
        return this._state;
    },

    subscribe  (observer) {

        this._callSubscriber = observer; //паттерн наблюдатель 
    },
    

    _addPost () { 
         
        //экспортируем новую компоненту. В пропсах наше новое сообщение, которое будем писать в textarea на сайте
        let newPost = {
            id: 5,
            message: this._state.profileObj.newPostText,
            likes: 0
        };
    
        this._state.profileObj.postsData.push(newPost); //пушим новый элемент в state
        this._state.profileObj.newPostText = ''; // занулили после добавления поста
        this._callSubscriber(this._state); //вызываем нашу копмноненту для перерисовки каждые раз после действия пользователя на сайте(клик по кнопке)
    },

    _upNewPostText  (newText) { 
   
        this._state.profileObj.newPostText = newText; 
        this._callSubscriber(this._state); //вызываем нашу копмноненту для перерисовки каждые раз после действия пользователя на сайте(клик по кнопке)
    },

    dispatch(action) {
        
        this._state.profileObj = profileReducer( this._state.profileObj, action);
        this._state.dialogsObj = dialogsReducer( this._state.dialogsObj, action);
        this._state.sidebar = sidebarReducer( this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
    
    
} 


window.store=store

export default store;

