
import classes from './Post.module.css'
const Post = (props) => {

    return <div className={classes.item}>
        <img src='https://media.istockphoto.com/id/1140180560/photo/colored-powder-explosion-on-black-background.jpg?s=612x612&w=0&k=20&c=gH_tj4MVWr0226qcq_uJ4nxfLTKG-7T29rtUklT4Obk='></img>
        {props.message}
       <div>
        <span>like</span> {props.likes}
       </div>
    </div>  
      
}

export default Post