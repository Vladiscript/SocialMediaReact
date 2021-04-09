import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink className={s.dialog__name} activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialog = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Leganza' },
        { id: 4, name: 'Moysha' },
        { id: 5, name: 'Nikitos' },
    ]



    let messages = [
        { id: 1, message: 'How are you?' },
        { id: 2, message: 'Yo, man' },
        { id: 3, message: 'Good luck' },
        { id: 4, message: 'How old are you?' },
        { id: 5, message: 'JS is cool!' },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Dialog message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;