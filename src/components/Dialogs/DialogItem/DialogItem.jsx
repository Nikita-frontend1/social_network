import { NavLink } from 'react-router-dom'
import classes from './../Dialogs.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return <div className={classes.item}>
        <NavLink to={path} className={navData => navData.isActive ? classes.active : classes.items}> {props.name} </NavLink>
    </div>
}




export default DialogItem