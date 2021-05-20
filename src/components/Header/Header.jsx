import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logos} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34dyR4PdRqvfNi_QIruoGyjHihGJrL98VuA&usqp=CAU' alt='' />
            <div className={s.login__block} >
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink >}
            </div>

        </header>
    )
}
export default Header;