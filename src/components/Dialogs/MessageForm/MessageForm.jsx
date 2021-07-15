import React from 'react';
import s from './../Dialogs.module.scss'
import { Formik, Form } from 'formik';
import { Textarea } from '../../common/Forms/Forms';
import { textValidator } from '../../../utilities/validators';

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
                <Form className={s.message__form}>
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

export default MessageForm;