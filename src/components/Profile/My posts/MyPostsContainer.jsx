import { connect } from 'react-redux'
import { addPostActionCreator, upNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'


let mapStateToProps = (state) =>{
    return {
       postsData: state.profileObj.postsData,
       newPostText: state.profileObj.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
       upNewPostText: (text) => {
        let action = (upNewPostTextActionCreator(text));
        dispatch (action)
       },
       addPost: ()=> {
        dispatch (addPostActionCreator())
       }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer