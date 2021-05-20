import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Form, Field } from 'react-final-form'


const Dialogs = (props) => {


    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} key={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items} >
                {dialogsElements}
                <MessageForm sendMessage={props.sendMessage} />
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

const MessageForm = (props) => {
    const onSubmit = (values) => {
        let text = values.message
        if (text) {
            props.sendMessage(text)
        }
    }
    return (
        <Form
            onSubmit={onSubmit}
            // validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field component='textarea' name='message' placeholder='Enter your message' className={s.textarea} />
                    <button type="submit">Send message</button>
                </form>
            )}
        />
    )
}
export default Dialogs;