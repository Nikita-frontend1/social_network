import Preloader from '../Common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import userPhoto from '../../images/img/user.png'
const ProfileInfo = (props) => {
    
    if (!props.profile) {   //если props.profile ==(равен) null ||(или) props.profile undefined, то выраженик true(отрицание - нет profile)
        return <Preloader />
    }

    return <div>

        <img src='https://cdn.prod.website-files.com/62a9e41d28a7ab25849bce9c/62fcab0db38819bef2500673_Is%20image%20processing%20part%20of%20machine%20learning-p-1080.jpg'></img>
        
            <div className={classes.ava}>
                {/* <img src='https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg'></img> */}
            </div>

           <div className={classes.description}> 
            <img src={ props.profile.photos.large  != null ? props.profile.photos.large : userPhoto  }></img>
            ava+description
            </div>
           
            {props.profile.aboutMe}

       
    </div>
}

export default ProfileInfo