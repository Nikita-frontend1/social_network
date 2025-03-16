import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://st2.depositphotos.com/1810600/5838/v/450/depositphotos_58387439-stock-illustration-abstract-vector-logo.jpg' />

        <div className={classes.loginBlock}>
        { props.isAuth ? props.login : <NavLink to= 'login'> Login</NavLink>}
                
        </div>
    </header>
}

export default Header