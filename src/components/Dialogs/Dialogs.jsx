import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Formik, Form } from 'formik';
import { Textarea } from '../common/Preloader/FormControl/FormControl';
import { textValidator } from '../../utilities/validators';




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
    const submit = (values) => {
        console.log(values);
        let text = values.text
        if (text) {
            props.sendMessage(text)
        }
    }
    return (
        <div>
            <Formik
                initialValues={{ text: '' }}
                validate={textValidator(0, 300)}
                onSubmit={submit}
            >{(isValidating) => (
                <Form>
                    <Textarea name={'text'} placeholder={'Enter your message'} />
                    <button type="submit" disabled={isValidating.errors.text}>
                        Send message
                    </button>
                </Form>
            )}

            </Formik>
        </div>
    )
}
export default Dialogs;