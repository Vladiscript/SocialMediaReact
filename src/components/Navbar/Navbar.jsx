import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav__item}>
                <NavLink className={s.route} activeClassName={s.active} to="/profile">Profile</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink className={s.route} activeClassName={s.active} to="/dialogs" >Messages</NavLink>
            </div>

            <div className={s.nav__item}>
                <a>Settings</a>
            </div>
            <div className={s.nav__item}>
                <NavLink className={s.route} activeClassName={s.active} to="/users" >Find users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;