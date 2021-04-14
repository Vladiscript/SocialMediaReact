import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageActionCreator, inputMessageActionCreator } from '../../redux/state';


const Dialogs = (props) => {


    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} />)

    const newMessageItem = React.createRef();

    const sendMessage = () => {
        let text = newMessageItem.current.value
        if (text) { props.dispatch(sendMessageActionCreator()) }

    }

    const inputMessage = () => {
        let text = newMessageItem.current.value
        props.dispatch(inputMessageActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
                <textarea ref={newMessageItem} onChange={inputMessage} className={s.textarea} value={props.messagesPage.textMessage} placeholder='Enter your message'></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;