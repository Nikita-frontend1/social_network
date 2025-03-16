import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


// let classes = {
//     'nav':'Navbar_nav__eJ6DQ',
//     'item':'Navbar_item__w1M90'
// }
const Navbar = () => {
    return <nav className={classes.nav}>

        <div className={classes.item}>
            <NavLink to='profile' className={navData => navData.isActive ? classes.active : classes.item} >Profile</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to='dialogs' className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to='news' className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
        </div>
        
        <div className={classes.item}>
            <NavLink to='users' className={navData => navData.isActive ? classes.active : classes.item} >Users</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to='music' className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to='settings' className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
        </div>

       {/* <div className={classes.fri} >
          Friends 
          <Friends/>
       </div> */}

    </nav>

}

export default Navbar