import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import s from './Header.module.scss'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__title}>Social Media</div>
            <Navbar className={s.header__nav} />
            <div className={s.header__login} >
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink >}
            </div>

        </header>
    )
}
export default Header;