import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.scss'


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink className={s.dialog__name} activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;