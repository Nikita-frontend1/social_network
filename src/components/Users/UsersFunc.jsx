import classes from './Users.module.css';
import userPhoto from '../../images/img/user.png'
import { NavLink } from 'react-router-dom';


let UsersFunc = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)

    let pages = [] ;
    for (let i=1; i <= pagesCount; i++) {
        
        if (pages.length < 20) {

            pages.push(i); 
        }

    };

    return <div>
        <div>
            {pages.map(p => {
                return <span> <button className={props.currentPage === p && classes.btn}
                    onClick={(event) => { props.onPageChanged(p) }} > {p} </button> </span>

            })}
             
        </div>
        {
            props.users.map(u => <div key={u.id} className={classes.users}>

                <span>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={classes.userphoto} />
                        </NavLink>
                    </div>

                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some (id => id === u.id)} onClick={() => 
                                { props.unfollow(u.id)  }}> Unfollow </button> //unfollow - thunkCreator

                             : <button disabled={props.followingInProgress.some (id => id === u.id)} onClick={() => 
                                { props.follow(u.id)   }}> Follow </button>}

                    </div>

                </span>

                <span>

                    <span>
                        <div>{u.name} </div>
                        <div>{u.status} </div>
                    </span>

                    <span>
                        <div>{'u.location.country'} </div>
                        <div>{'u.location.city'}</div>
                    </span>

                </span>

            </div>)
        }
    </div>
}

export default UsersFunc;