
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React, { createRef } from 'react'

const MyPosts = (props) => {
      

    let postsElements = props.postsData.map (p=> <Post message={p.message} likes= {p.likes}/>)

    let newPostElement = createRef (); //создали новую ref ссылку и импортировали через react

    let addUser = () => {
    
       props.addPost(); // передали через props наш метод 
       
    }

     let onPostChange = () => {
      let text = newPostElement.current.value;
      props.upNewPostText(text);
     }

    return <div className={classes.content}>

       <h3>My posts</h3> 
       
        <div>

            <div>
                <textarea onChange={onPostChange} 
                ref={newPostElement} value={props.newPostText}/> 
            </div>

            <div>
               <button onClick={addUser} className={classes.mybtn}> Add posts</button>
            </div>

        </div>
        <div className={classes.posts}>

            {postsElements}
            
        </div>
    </div>
}

export default MyPosts